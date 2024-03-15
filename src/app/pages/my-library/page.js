"use client";
import { auth, loadUserBooksData } from "../../api/methods";
import Logged from "../../components/notLogged/Logged";
import Navigation from "../../components/navigation/allpages/mainNavigation";
import Book from "../../components/books/librarypage/libraryBook";
import Footer from "../../components/Footer";
import "./styles.css";

export default function Library() {
	const user = auth.currentUser;
	const userBooks = loadUserBooksData();
	console.log(userBooks);

	if (user) {
		return (
			<div id="library-page">
				<Navigation />
				<section className="library-section">
					<h1>My Library</h1>
					{/* <div className="shelf-buttons">
						<button className="button-accent-light">All Books</button>
						<button className="button-accent-light">Want to Read</button>
						<button className="button-accent-light">Currently Reading</button>
						<button className="button-accent-light">Read</button>
						<button className="button-accent-light">Discontinued</button>
					</div> */}
					{userBooks ? (
						<div className="book-shelf">
							{userBooks &&
								userBooks.map((item) => (
									<Book
										key={item.isbn}
										book_isbn={item.isbn}
										book_title={item.book_title}
										book_cover={item.image_url}
										book_rating={item.book_rating}
										reading_status={item.reading_status}
										user_comments={item.user_comments}
										start_date={item.start_date}
										end_date={item.end_date}
										last_read_page={item.last_read_page}
										total_pages={item.total_pages}
									/>
								))}
						</div>
					) : (
						<h2>
							There are no books to track! Go to the search page to start adding
							books.
						</h2>
					)}
				</section>
				<Footer />
			</div>
		);
	} else {
		return <Logged />;
	}
}
