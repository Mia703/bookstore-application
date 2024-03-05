import app from "../../api/firebase"
import { getAuth } from "firebase/auth";
import Logged from "../../components/notLogged/Logged"
import Navigation from "../../components/navigation/allpages/mainNavigation";
import Book from "../../components/books/librarypage/libraryBook";
import Footer from "../../components/Footer";
import "./styles.css";

export default function Library() {

	const auth = getAuth(app);
	const user = auth.currentUser;
	if (user) {
		return (
			<div id="library-page">
				<Navigation />
				<section className="library-section">
					<h1>My Library</h1>
					<div className="shelf-buttons">
						<button className="button-accent-light selected">All Books</button>
						<button className="button-accent-light">Want to Read</button>
						<button className="button-accent-light">Currently Reading</button>
						<button className="button-accent-light">Read</button>
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
	else {
		return (
			<Logged />
		);
	}
}
