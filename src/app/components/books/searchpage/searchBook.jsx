"use client";
import { useState } from "react";
import { userLibrary } from "../../../api/methods";
import "./style.css";

export default function SearchBook({
	index,
	user_id,
	book_title,
	book_author,
	book_description,
	book_cover,
	published_year,
	total_pages,
}) {
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const { addUserBook } = userLibrary();

	return (
		<div className="book-container">
			<img
				src={book_cover}
				alt={book_title}
				onClick={toggleModal}
				className="book-cover"
			/>
			{showModal && (
				<div className="modal-background">
					<div className="modal">
						<div className="close-button-container">
							<button
								type="button"
								className="button-background close-button"
								onClick={toggleModal}
							>
								<span className="material-symbols-outlined">close</span>
							</button>
						</div>
						<div className="modal-content-grid">
							<img
								src={book_cover}
								alt={book_title}
								className="modal-book-cover"
							/>
							<div className="content">
								<h2 className="title">{book_title}</h2>
								<p className="author">
									by {book_author} <span className="info">(Author)</span>
								</p>
								<p className="info">
									Published in {published_year}. Total pages {total_pages}.
								</p>
								<div className="library-button-container">
									<button type="button" className="button-accent-medium" onClick={() => {
										addUserBook(user_id, index, "reading");
									}}>Reading</button>
									<button type="button" className="button-accent-medium" onClick={() => {
										addUserBook(user_id, index, "wantToRead");
									}}>Want to Read</button>
									<button type="button" className="button-accent-medium" onClick={() => {
										addUserBook(user_id, index, "read");
									}}>Read</button>
									<button type="button" className="button-accent-medium" onClick={() => {
										addUserBook(user_id, index, "noLongerWantToRead");
									}}>No longer want to read</button>
								</div>
							</div>
							<p className="description">{book_description}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
