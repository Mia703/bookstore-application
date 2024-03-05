"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import app from "../../api/firebase";
import { getAuth } from "firebase/auth";
import Logged from "../../components/notLogged/Logged"
import Navigation from "../../components/navigation/allpages/mainNavigation";
import supabase from "../../api/supabase";
import Book from "../../components/books/searchpage/searchBook";
import ScrollButton from "../../components/books/searchpage/scrollButton";
import Footer from "../../components/Footer";
import "./style.css";

export default function Search() {

	const formikSearch = useFormik({
		initialValues: {
			search: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	// fetching data from supabase
	const [data, setData] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const { data, error } = await supabase
				.from("books")
				.select("*")
				.order("book_title", { ascending: true });

			if (error) {console.log("Error: Could not fetch data from supabase. ", error);}
			else {setData(data);}
		}
		fetchData();
	}, []);

	const auth = getAuth(app);
	const user = auth.currentUser;
	if (user) {
		// User is signed in
		return (
			<div id="search-page">
				<Navigation />
				<section className="search-section">
					<h1>Browse All Books</h1>
					<form onSubmit={formikSearch.handleSubmit} className="searchbar">
						<label htmlFor="search"></label>
						<input
							type="search"
							name="search"
							id="search"
							placeholder="Search for a Title or Author"
							onBlur={formikSearch.handleBlur}
							onChange={formikSearch.handleChange}
							value={formikSearch.values.search}
						/>
						<button type="submit" className="search-button">
							<span className="search-icon material-symbols-outlined">
								search
							</span>
						</button>
					</form>
				</section>
				{data ? (
					<div className="books-grid-container">
						{data.map((item) => (
							<Book
								key={item.isbn}
								book_title={item.book_title}
								book_author={item.book_author}
								book_description={item.book_description}
								book_cover={item.image_url}
								published_year={item.published_year}
								total_pages={item.total_pages}
							/>
						))}
					</div>
				) : (
					<p>Loading book data...</p>
				)}
				<ScrollButton />
				<Footer />
			</div>
		);
	} else {
		// User is not signed in
		return (
			<Logged />
		);
	}
}
