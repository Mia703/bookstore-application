import { getAuth } from "firebase/auth";
import app from "./firebase";
import supabase from "./supabase";
import { useState, useEffect } from "react";

// -------------- firebase methods --------------
const auth = getAuth(app);
const user = auth.currentUser;

// -------------- supabase methods --------------

// add user's first and last name to database
const [setData] = useState(null);
async function addUser(userID, firstName, lastName) {
	const { data, error } = await supabase.from("users").insert([
		{
			uuid: `${userID}`,
			first_name: `${firstName}`,
			last_name: `${lastName}`,
		},
	]);

	if (error) {
		console.log("Error: addUser.\n", error);
	} else {
		setData(data);
	}
}

// return books database (for search page)
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

// update a user's first name
const [setFirstName] = useState(null);
async function updateFirstName(userID, firstName) {
	const { data, error } = await supabase
		.from("users")
		.update({ first_name: `${firstName}` })
		.eq("uuid", `${userID}`);

	if (error) {
		console.log("Error: updateFirstName.\n", error);
	} else {
		setFirstName(data);
	}
}

// update a user's last name
const [setLastName] = useState(null);
async function updateLastName(userID, lastName) {
	const { data, error } = await supabase
		.from("users")
		.update({ last_name: `${lastName}` })
		.eq("uuid", `${userID}`);
	if (error) {
		console.log("Error: updateLastName.\n" + error);
	} else {
		setLastName(data);
	}
}

// return the user's first and last name
const [nameData, setName] = useState(null);
useEffect(() => {
	async function fetchUserName(userID) {
		const { data, error } = await supabase
			.from("users")
			.select("first_name, last_name")
			.eq("uuid", `${user.uid}`);

		if (error) {
			console.log("Error: fetchUserName.\n", error);
		} else {
			setName(data);
		}
	}
	fetchUserName();
}, []);

// -------------- other methods --------------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export {
	auth,
	user,
	addUser,
	booksData,
	updateFirstName,
	updateLastName,
	nameData,
	sleep,
};
