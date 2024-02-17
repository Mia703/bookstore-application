import Navigation from "../../components/mainNavigation";
import Book from "../../components/searchBooks";
import Footer from "../../components/Footer";
import "./search.css";

export default function Search() {
	return (
		<div id="search-page">
			<Navigation />
			<h1>Hello</h1>
			<section className="search-section">
				<form action="#">
					<label htmlFor="Search"></label>
					<input type="search" name="search" id="search" placeholder="Search for Title or Author"/>
					<button type="submit">Search</button>
				</form>
				<div className="filter-container">
					<p>Filters</p>
					<button type="button">+</button>
				</div>
				<div className="books-container">
					<Book />
				</div>
			</section>
			<div className="back-to-top-button">
				<button type="button">^</button>
			</div>
			<Footer />
		</div>
	);
}
