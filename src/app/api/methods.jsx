"use client";
import { useState, useEffect } from "react";
import app from "./firebase";
import { getAuth } from "firebase/auth";
import supabase from "./supabase";

// -------------- firebase methods --------------
const auth = getAuth(app);

// get the current user every time this function is called?

// -------------- supabase methods --------------

// add user's first and last name to database (sign up page - good)
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

// return books database (search page - good)
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

// update the users first and last name; return the user's current name
const userDetails = () => {
	// update the user's last name
	async function updateFirstName(userID, firstName) {
		const { data, error } = await supabase
			.from("users")
			.update({ first_name: `${firstName}` })
			.eq("uuid", `${userID}`);
	
		if (error) {
			console.log("Error: updateFirstName.\n", error.message);
		} else {
		}
	}
	
	// update a user's last name
	async function updateLastName(userID, lastName) {
		const { data, error } = await supabase
			.from("users")
			.update({ last_name: `${lastName}` })
			.eq("uuid", `${userID}`);
		if (error) {
			console.log("Error: updateLastName.\n" + error.message);
		} else {
		}
	}
	
	// returns the user's first and last name (mainNavigation - good)
	const [nameData, setName] = useState(null);
	useEffect(() => {
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
		const user = auth.currentUser;
		if (user !== null) {
			fetchUserName(user.uid);
		} else return;
	}, []);
	return { updateFirstName, updateLastName, nameData };
};

// -------------- other methods --------------
const useSleep = () => {
	// sets a time which executes a function or piece of code after the timer expires
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	return sleep;
};

export {
	auth,
	insertUser,
	loadBooksData,
	userDetails,
	useSleep,
};
