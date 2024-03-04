"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import supabase from "../../supabase/initSupabase";
import Navigation from "../../components/mainNavigation";
import ScrollButton from "../../components/scrollButton";
import Book from "../../components/searchBook";
import Footer from "../../components/Footer";
import "./search.css";

export default function Search() {

	// TODO: add page redirect. if user is not logged in, redirect to login page, else display user's name

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

			if (error) console.log("error", error);
			else setData(data);
		}

		fetchData();
	}, []);

	// async function Notes() {
	// 	const { data: books } = await supabase.from("books").select();
	// 	return <pre>{JSON.stringify(books, null, 2)}</pre>
	// }

	return (
		<div id="search-page">
			<Navigation />
			<section className="search-section">
				<h1>Browse All Books</h1>
				<form onSubmit={formikSearch.handleSubmit} className="search-form">
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
			<section className="books-section">
				{data ? (
					<div className="books-grid">
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
			</section>
			<ScrollButton />
			<Footer />
		</div>
	);
}
