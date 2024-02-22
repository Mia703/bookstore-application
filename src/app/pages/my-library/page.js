import Navigation from "../../components/mainNavigation";
import Book from "../../components/libraryBook";
import Footer from "../../components/Footer";
import "./styles.css";

export default function Library() {
	return (
		<div id="library-page">
			<Navigation />
			<section className="library-section">
				<h1>My Library</h1>
				<div className="shelf-buttons">
					<button className="button-accent-light selected">All Books</button>
					<button className="button-accent-light">Read</button>
					<button className="button-accent-light">Currently Reading</button>
					<button className="button-accent-light">Want to Read</button>
					<button className="button-accent-light">Discontinued</button>
				</div>
				<div className="book-shelf">
					<Book />
					<Book />
					<Book />
					<Book />
				</div>
			</section>
			<Footer />
		</div>
	);
}
