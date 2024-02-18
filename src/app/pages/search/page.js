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
					<h2>Filters</h2>
					<div className="filter-options">
						<div className="category">
							<p>Genres</p>
								<p>
									<input type="checkbox" name="genre" value="autobiography" /> Autobiography
								</p>
									<input type="checkbox" name="genre" value="biography" /> Biography
								<p>
									<input type="checkbox" name="genre" value="drama" /> Drama
								</p>
									<input type="checkbox" name="genre" value="fantasy" /> Fantasy
								<p>
									<input type="checkbox" name="genre" value="fiction" /> Fiction
								</p>
									<input type="checkbox" name="genre" value="historical fiction" /> Historical Fiction
								<p>
									<input type="checkbox" name="genre" value="horror" /> Horror
								</p>
									<input type="checkbox" name="genre" value="humor" /> Humor
								<p>
									<input type="checkbox" name="genre" value="mystery" /> Mystery
								</p>
									<input type="checkbox" name="genre" value="mythology" /> Mythology
								<p>
									<input type="checkbox" name="genre" value="nonfiction" /> Nonfiction
								</p>
									<input type="checkbox" name="genre" value="science fiction" /> Science Fiction
								<p>
									<input type="checkbox" name="genre" value="young adult" /> Young Adult
								</p>
						</div>		
						<div className="category">
							<p>Pace</p>
							<p>
								<input type="checkbox" name="pace" value="slow" /> Slow
							</p>
							<p>
								<input type="checkbox" name="pace" value="medium" /> Medium
							</p>
							<p>
								<input type="checkbox" name="pace" value="fast" /> Fast
							</p>
						</div>	
						<div className="category">
							<p>Pages</p>
							<p>
								<input type="checkbox" name="pages" value="lt300" /> Less than 300 pages
							</p>
							<p>
								<input type="checkbox" name="pages" value="300-499" /> 300-499 pages
							</p>
							<p>
								<input type="checkbox" name="pages" value="500plus" /> More than 500 pages
							</p>
						</div>	
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