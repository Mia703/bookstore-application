"use client";
import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navigation from "../../components/mainNavigation";
import Book from "../../components/searchBook";
import Footer from "../../components/Footer";
import "./search.css";

export default function Search() {
	const [isExpanded, setExpanded] = useState(false);
	const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

	const formikSearch = useFormik({
		initialValues: {
			search: '',
		},
		onSubmit: (values) => {
			console.log(values)
		},
	});

	const formikFilter = useFormik({
		initialValues: {
			genre: [],
			pace: [],
			pages: [],
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

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
						<span class="search-icon material-symbols-outlined">search</span>
					</button>
				</form>

				<div className="filter-container">
					<div className="container">
						<h2 className="bold">Filter</h2>
						<button
							type="button"
							className="collapse-button"
							{...getToggleProps({
								onClick: () => setExpanded((prevExpanded) => !prevExpanded),
							})}
						>
							{isExpanded ? (
								<span class="material-symbols-outlined">remove</span>
							) : (
								<span class="material-symbols-outlined">add</span>
							)}
						</button>
					</div>
					<div {...getCollapseProps()} id="hidden">
						<form onSubmit={formikFilter.handleSubmit} className="filter-form">
							<div className="filter-options">
								<div className="category genre">
									<p className="bold">Genres</p>

									<label htmlFor="autobiography">
										<input
											type="checkbox"
											name="genre"
											value="autobiography"
											id="autobiography"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.filter}
										/>
										Autobiography
									</label>
									<br />

									<label htmlFor="biography">
										<input
											type="checkbox"
											name="genre"
											value="biography"
											id="biography"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.filter}
										/>
										Biography
									</label>
									<br />

									<label htmlFor="drama">
										<input
											type="checkbox"
											name="genre"
											value="drama"
											id="drama"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.filter}
										/>
										Drama
									</label>
									<br />
									<label htmlFor="fantasy">
										<input
											type="checkbox"
											name="genre"
											value="fantasy"
											id="fantasy"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.filter}
										/>
										Fantasy
									</label>
									<br />
									<label htmlFor="fiction">
										<input
											type="checkbox"
											name="genre"
											value="fiction"
											id="fiction"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.filter}
										/>
										Fiction
									</label>
									<br />
									<label htmlFor="historical-fiction">
										<input
											type="checkbox"
											name="genre"
											value="historical fiction"
											id="historical-fiction"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.filter}
										/>
										Historical Fiction
									</label>
									<br />
									<label htmlFor="horror">
										<input
											type="checkbox"
											name="genre"
											value="horror"
											id="horror"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.filter}
										/>
										Horror
									</label>
									<br />
									<label htmlFor="humour">
										<input
											type="checkbox"
											name="genre"
											value="humour"
											id="humour"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.filter}
										/>
										Humour
									</label>
									<br />
									<label htmlFor="mystery">
										<input
											type="checkbox"
											name="genre"
											value="mystery"
											id="mystery"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.filter}
										/>
										Mystery
									</label>
									<br />
									<label htmlFor="mythology">
										<input
											type="checkbox"
											name="genre"
											value="mythology"
											id="mythology"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.filter}
										/>
										Mythology
									</label>
									<br />
									<label htmlFor="non-fiction">
										<input
											type="checkbox"
											name="genre"
											value="non-fiction"
											id="non-fiction"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.filter}
										/>
										Non-Fiction
									</label>
									<br />
									<label htmlFor="science-fiction">
										<input
											type="checkbox"
											name="genre"
											value="science-fiction"
											id="science-fiction"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.filter}
										/>
										Science Fiction
									</label>
									<br />
									<label htmlFor="young-adult">
										<input
											type="checkbox"
											name="genre"
											value="young-adult"
											id="young-adult"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.filter}
										/>
										Young Adult
									</label>
									<br />
								</div>
								<div className="category pace">
									<p className="bold">Pace</p>

									<label htmlFor="slow">
										<input
											type="checkbox"
											name="pace"
											value="slow"
											id="slow"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.pace}
										/>
										Slow
									</label>
									<br />

									<label htmlFor="medium">
										<input
											type="checkbox"
											name="pace"
											value="medium"
											id="medium"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.pace}
										/>
										Medium
									</label>
									<br />

									<label htmlFor="fast">
										<input
											type="checkbox"
											name="pace"
											value="fast"
											id="fast"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.pace}
										/>
										Fast
									</label>
									<br />
								</div>
								<div className="category pages">
									<p className="bold">Pages</p>

									<label htmlFor="lt300">
										<input
											type="checkbox"
											name="pages"
											value="less-than-300"
											id="lt300"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.pages}
										/>
										Less than 300 pages
									</label>
									<br />
									<label htmlFor="lt499">
										<input
											type="checkbox"
											name="pages"
											value="300-to-499"
											id="lt499"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.pages}
										/>
										300 - 499 pages
									</label>
									<br />
									<label htmlFor="500plus">
										<input
											type="checkbox"
											name="pages"
											value="500-plus"
											id="500plus"
											onBlur={formikFilter.handleBlur}
											onChange={formikFilter.handleChange}
											values={formikFilter.values.pages}
										/>
										More than 500 pages
									</label>
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
