"use client";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import app from "./firebase";
import supabase from "./supabase";

// -------------- firebase methods --------------
const auth = getAuth(app);
const user = auth.currentUser;

// -------------- supabase methods --------------

// add user's first and last name to database (signup page - good)
const insertUser = () => {
	async function addUser(userID, firstName, lastName) {
		const { data, error } = await supabase.from("users").insert([
			{
				uuid: `${userID}`,
				first_name: `${firstName}`,
				last_name: `${lastName}`,
			},
		]);

		if (error) {
			console.log("Error: addUser.\n", error.message);
		} else {
		}
	}
	return { addUser };
};

// return books database (for search page)
const loadBooksData = () => {
	const [booksData, setBooksData] = useState(null);
	useEffect(() => {
		async function returnBooksLibrary() {
			const { data, error } = await supabase
				.from("books")
				.select("*")
				.order("book_title", { ascending: true });
	
			if (error) {
				console.log("Error: returnBooksLibrary.\n", error);
			} else {
				setBooksData(data);
			}
		}
		returnBooksLibrary();
	}, []);
	return booksData;
};

// update the users first and last name, return the user's current name
const userDetails = () => {
	// update a user's first name
	// TODO: remove userID parameter
	// const [setFirstName] = useState(null);
	async function updateFirstName(userID, firstName) {
		const { data, error } = await supabase
			.from("users")
			.update({ first_name: `${firstName}` })
			.eq("uuid", `${userID}`);
	
		if (error) {
			console.log("Error: updateFirstName.\n", error.message);
		} else {
			// setFirstName(data);
		}
	}
	
	// update a user's last name
	// TODO: remove userID parameter
	// const [setLastName] = useState(null);
	async function updateLastName(userID, lastName) {
		const { data, error } = await supabase
			.from("users")
			.update({ last_name: `${lastName}` })
			.eq("uuid", `${userID}`);
		if (error) {
			console.log("Error: updateLastName.\n" + error.message);
		} else {
			// setLastName(data);
		}
	}
	
	// return the user's first and last name
	const [nameData, setName] = useState(null);
	async function fetchUserName(userID) {
		const { data, error } = await supabase
			.from("users")
			.select("first_name, last_name")
			.eq("uuid", `${userID}`);

		if (error) {
			console.log("Error: fetchUserName.\n", error.message);
		} else {
			setName(data);
		}
	}
	useEffect(() => {
		fetchUserName();
	}, []);
	return { updateFirstName, updateLastName, nameData, fetchUserName };
};

// -------------- other methods --------------
const useSleep = () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	return sleep;
};

export {
	auth,
	user,
	insertUser,
	loadBooksData,
	userDetails,
	useSleep,
};
