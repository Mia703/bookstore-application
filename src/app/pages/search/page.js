import Navigation from "../../components/accountNavigation";
import Footer from "../../components/Footer";
import "./searchStyles.css";

export default function Search() {
	return (
		<div className="search-page-container">
			<Navigation />
			<section className="search-section">
				{/* TODO: insert search bar */}

				<div className="filter-container visible">
					<div>Filter</div>
					<div>+</div>
				</div>

				<div className="book-grid-container">
					<div className="book">
						<div className="book-image-container">
							<img src="" alt="Book Name HERE" />
						</div>
						<div className="book-content-container">
							<h2>Title</h2>
							<p>Alternate Titles</p>
							<p>Author</p>
							<p>Description...</p>
							<div className="buttons-container">
								<button type="button">Add to Library</button>
								<div className="library-dropdown">
									<button type="button">Reading</button>
									<button type="button">Want to read</button>
									<button type="button">Read</button>
									<button type="button">No longer want to read</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
