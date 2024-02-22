"use client";
import Navigation from "../../components/mainNavigation";
import Book from "../../components/searchBook";
import Footer from "../../components/Footer";
import "./search.css";

export default function Search() {
	return (
		<div id="search-page">
			<Navigation />
			<section className="search-section">
				<h1>Browse All Books</h1>
				<form action="#" className="search-form">
					<label htmlFor="search"></label>
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Search for a Title or Author"
					/>
					<button type="submit" className="search-button">
						<span class="search-icon material-symbols-outlined">search</span>
					</button>
				</form>

				<div className="filter-container">
					<div className="container">
						<h2>Filter</h2>
						<button type="button" className="collapse-button">
							<span class="material-symbols-outlined">add</span>
							<span class="material-symbols-outlined">remove</span>
						</button>
					</div>
					<div id="hidden">
						<form action="#" className="filter-form">
							<div className="filter-options">
								<div className="category genre">
									<p className="bold">Genres</p>
									<input
										type="checkbox"
										name="genre"
										value="autobiography"
										id="autobiography"
									/>
									<label htmlFor="autobiography">Autobiography</label>
									<br />
									<input
										type="checkbox"
										name="genre"
										value="biography"
										id="biography"
									/>
									<label htmlFor="biography">Biography</label>
									<br />
									<input
										type="checkbox"
										name="genre"
										value="drama"
										id="drama"
									/>
									<label htmlFor="drama">Drama</label>
									<br />
									<input
										type="checkbox"
										name="genre"
										value="fantasy"
										id="fantasy"
									/>
									<label htmlFor="fantasy">Fantasy</label>
									<br />
									<input
										type="checkbox"
										name="genre"
										value="fiction"
										id="fiction"
									/>
									<label htmlFor="fiction">Fiction</label>
									<br />
									<input
										type="checkbox"
										name="genre"
										value="historical fiction"
										id="historical-fiction"
									/>
									<label htmlFor="historical-fiction">Historical Fiction</label>
									<br />
									<input
										type="checkbox"
										name="genre"
										value="horror"
										id="horror"
									/>
									<label htmlFor="horror">Horror</label>
									<br />
									<input
										type="checkbox"
										name="genre"
										value="humour"
										id="humour"
									/>
									<label htmlFor="humour">Humour</label>
									<br />
									<input
										type="checkbox"
										name="genre"
										value="mystery"
										id="mystery"
									/>
									<label htmlFor="mystery">Mystery</label>
									<br />
									<input
										type="checkbox"
										name="genre"
										value="mythology"
										id="mythology"
									/>
									<label htmlFor="mythology">Mythology</label>
									<br />
									<input
										type="checkbox"
										name="genre"
										value="non-fiction"
										id="non-fiction"
									/>
									<label htmlFor="non-fiction">Non-Fiction</label>
									<br />
									<input
										type="checkbox"
										name="genre"
										value="science-fiction"
										id="science-fiction"
									/>
									<label htmlFor="science-fiction">Science Fiction</label>
									<br />
									<input
										type="checkbox"
										name="genre"
										value="young-adult"
										id="young-adult"
									/>
									<label htmlFor="young-adult">Young Adult</label>
									<br />
								</div>
								<div className="category pace">
									<p className="bold">Pace</p>
									<input type="checkbox" name="slow" value="slow" id="slow" />
									<label htmlFor="slow">Slow</label>
									<br />
									<input
										type="checkbox"
										name="medium"
										value="medium"
										id="medium"
									/>
									<label htmlFor="medium">Medium</label>
									<br />
									<input type="checkbox" name="fast" value="fast" id="fast" />
									<label htmlFor="fast">Fast</label>
									<br />
								</div>
								<div className="category pages">
									<p className="bold">Pages</p>
									<input
										type="checkbox"
										name="less-than-300"
										value="lt300"
										id="lt300"
									/>
									<label htmlFor="lt300">Less than 300 pages</label>
									<br />
									<input
										type="checkbox"
										name="less-than-499"
										value="lt499"
										id="lt499"
									/>
									<label htmlFor="lt499">300 - 499 pages</label>
									<br />
									<input
										type="checkbox"
										name="more-than-500"
										value="500plus"
										id="500plus"
									/>
									<label htmlFor="500plus">More than 500 pages</label>
									<br />
								</div>
							</div>
							<button type="submit" className="bold">
								Apply Filters
							</button>
						</form>
					</div>
				</div>
			</section>
			<section className="books-section">
				{/* TODO: add mapping to book component */}
				<Book />
				<Book />
				<Book />
			</section>
			<div className="back-to-top-button">
				<button type="button">
					<a href="#search-page">
						<span class="material-symbols-outlined">expand_less</span>
					</a>
				</button>
			</div>
			<Footer />
		</div>
	);
}
