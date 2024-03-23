"use client";
import { useState, useEffect } from "react";
import app from "./firebase";
import { getAuth } from "firebase/auth";
import supabase from "./supabase";

// -------------- firebase methods --------------
const auth = getAuth(app);

// get the currently signed in user
// TODO: call this function at the start of the page and after updating information on a user

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

// adds user book to database
const insertUserBook = () => {
	async function addUserBook(
		bookISBN,
		bookRating,
		readingStatus,
		userComments,
		startDate,
		endDate,
		lastReadPage
	) {
		const user = auth.currentUser;
		if (user == null) {
			console.log("Error: addUserbook. Could not get current user. \n");
			return;
		}

		const { data: updateBookData, error: updateBookDataError } = await supabase
			.from("book_progress")
			.update({
				book_rating: `${bookRating}`,
				reading_status: `${readingStatus}`,
				user_comments: `${userComments}`,
				start_date: `${startDate}`,
				end_date: `${endDate}`,
				last_read_page: `${lastReadPage}`,
			})
			.eq("user_uuid", `${user.uid}`)
			.eq("book_isbn", `${bookISBN}`);

		if (updateBookDataError) {
			console.log(
				"Error: addUserBook. Updating user book row error.\n",
				updateBookDataError.message
			);
			// return;
		} else {
			console.log("Success; updated row");
		}
	}
	return { addUserBook };
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
				console.log("Error: returnBooksLibrary.\n", error.message);
			} else {
				setBooksData(data);
			}
		}
		returnBooksLibrary();
	}, []);
	return booksData;
};

// update the users first and last name; return the user's current name (navigation and account pages)
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

// add user selected to books_progress table
const userLibrary = () => {
	async function addUserBook(userID, bookID, readingStatus) {
		const { data, error } = await supabase.from("book_progress").insert([
			{
				user_uuid: `${userID}`,
				book_isbn: `${bookID}`,
				book_rating: 0,
				reading_status: `${readingStatus}`,
				user_comments: "",
				start_date: `${year}-${month}-${day}`,
				end_date: `${year}-${month}-${day}`,
				last_read_page: 0,
			},
		]);
		if (error) {
			console.log("Error: addUserBook.\n", error.message);
			alert("Could not add book to library. Please try again");
		} else {
			alert("Added book to library.");
		}
	}
	return { addUserBook };
};

// returns books the user is or has read (my library - good)
// OpenAI. (2024). ChatGPT (3.5) [Large language model]. https://chat.openai.com
const loadUserBooksData = () => {
	const [userBooks, setUserBooks] = useState([]);
	useEffect(() => {
		async function returnUserBooksLibrary() {
			// get the current user
			const user = auth.currentUser;
			if (user == null) {
				return; // exit function
			}
			const userID = user.uid;

			// get all the columns from the book_progress table that equal the user
			const { data, error } = await supabase
				.from("book_progress")
				.select("*")
				.eq("user_uuid", userID);

			// if there's an error getting the book_progress say what the error is
			if (error) {
				console.log("Error: getUserBookProgress.\n", error.message);
				// throw error;
				return; // exit the function before moving on
			} else {
				// get the isbns from the books table
				const isbns = data.map((item) => item.book_isbn);

				// get corresponding image_url from the books table using book_isbn values
				const { data: bookData, error: booksError } = await supabase
					.from("books")
					.select("isbn, image_url, total_pages")
					.in("isbn", isbns);

				if (booksError) {
					console.log("Error: getImageURL.\n", booksError.message);
					// throw booksError;
					return; // exit function
				} else {
					// Merge book_progress data with fetched book data based on book_isbn
					const mergedBooks = data.map((item) => {
						const book = bookData.find((book) => book.isbn === item.book_isbn);
						return {
							...item,
							image_url: book ? book.image_url : null,
							total_pages: book ? book.total_pages : null,
						};
					});
					setUserBooks(mergedBooks);
				}
			}
		}

		returnUserBooksLibrary();
	}, []); // Empty dependency array to ensure the effect runs only once
	return userBooks;
};

// -------------- other methods --------------
const useSleep = () => {
	// sets a time which executes a function or piece of code after the timer expires
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	return sleep;
};

const today = new Date();
const year = today.getFullYear();
let month = today.getMonth() + 1; // because month starts at 0
let day = today.getDate();

export {
	auth,
	insertUser,
	insertUserBook,
	loadBooksData,
	userDetails,
	useSleep,
	userLibrary,
	loadUserBooksData,
};
