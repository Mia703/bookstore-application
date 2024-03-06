"use client";
import { useFormik } from "formik";
import { auth, loadBooksData, userDetails } from "../../api/methods"
import Logged from "../../components/notLogged/Logged"
import Navigation from "../../components/navigation/allpages/mainNavigation";
import Book from "../../components/books/searchpage/searchBook";
import ScrollButton from "../../components/books/searchpage/scrollButton";
import Footer from "../../components/Footer";
import "./style.css";

export default function Search() {
	const booksData = loadBooksData();
	
	const formikSearch = useFormik({
		initialValues: {
			search: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const user = auth.currentUser;
	if (user) {
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
				{booksData ? (
					<div className="books-grid-container">
						{booksData && booksData.map((item) => (
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
					<p>Loading books...</p>
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
