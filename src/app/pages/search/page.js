import Navigation from "../../components/mainNavigation";
import Book from "../../components/searchBooks";
import Footer from "../../components/Footer";
import "./search.css";

export default function Search() {
	return (
		<div id="search-page">
			<Navigation />
			<section className="search-section">
				<h1>Browse All Books</h1>
				<form action="#">
					<label htmlFor="Search"></label>
					<input type="search" name="search" id="search" placeholder="Search for Title or Author"/>
					<button type="submit">Search</button>
				</form>
				<div className="filter-container">
					<p>Filters</p>
					<button type="button">+</button>
					<div className="filter-options">
						<p>Genres</p>
						<label>
							<input type="checkbox" name="genre" value="autobiography" /> Autobiography
							<input type="checkbox" name="genre" value="biography" /> Biography
							<input type="checkbox" name="genre" value="drama" /> Drama
							<input type="checkbox" name="genre" value="fantasy" /> Fantasy
							<input type="checkbox" name="genre" value="fiction" /> Fiction
							<input type="checkbox" name="genre" value="historical fiction" /> Historical Fiction
							<input type="checkbox" name="genre" value="horror" /> Horror
							<input type="checkbox" name="genre" value="humor" /> Humor
							<input type="checkbox" name="genre" value="mystery" /> Mystery
							<input type="checkbox" name="genre" value="mythology" /> Mythology
							<input type="checkbox" name="genre" value="nonfiction" /> Nonfiction
							<input type="checkbox" name="genre" value="science fiction" /> Science Fiction
							<input type="checkbox" name="genre" value="young adult" /> Young Adult
						</label>
						<p>Pace</p>
						<label>
							<input type="checkbox" name="pace" value="slow" /> Slow
						</label>
						<label>
							<input type="checkbox" name="pace" value="medium" /> Medium
						</label>
						<label>
							<input type="checkbox" name="pace" value="fast" /> Fast
						</label>
						<p>Pages</p>
						<label>
							<input type="checkbox" name="pages" value="lt300" /> Less than 300 pages
						</label>
						<label>
							<input type="checkbox" name="pages" value="300-499" /> 300-499 pages
						</label>
						<label>
							<input type="checkbox" name="pages" value="500plus" /> More than 500 pages
						</label>
					</div>
				</div>
				<button type="button">Apply</button>
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
