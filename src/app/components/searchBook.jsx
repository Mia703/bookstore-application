"use client";
import { useState } from "react";

export default function SearchBook({
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

	// TODO: move to css file for media queries
	const style = {
		bookContainer: {
			textAlign: "center",
		},
		bookCover: {
			transition: "var(--std-transition)",
			width: "229px",
			border: "2px solid var(--font)",
			cursor: "pointer",
		},
		modalStyle: {
			background: {
				position: "fixed",
				top: "0",
				left: "0",
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			},
			modal: {
				backgroundColor: "var(--background)",
				width: "60vw",
				padding: "2rem",
				borderRadius: "var(--std-section-border-radius)",
				boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
				animation: "slideDown 0.5s ease",
				display: "flex",
				flexDirection: "column",
				closeButton: {
					cursor: "pointer",
					float: "right",
					display: "flex",
				},
				contentGrid: {
					display: "grid",
					gridTemplateColumns: "auto 1fr",
					gap: "3rem",
					bookCover: {
						width: "350px",
						border: "2px solid var(--font)",
					},
					content: {
						textAlign: "left",
						title: {
							fontSize: "2.5em",
							marginBottom: "0",
						},
						author: {
							fontSize: "1.3em",
							marginBottom: "2rem",
						},
						description: {
							width: "60ch",
							marginBottom: "1rem",
						},
						meta: {
							fontSize: "15px"
						},
					},
				},
			},
		},
	};

	return (
		<div className="book-container" style={style.bookContainer}>
			<img
				src={book_cover}
				alt={book_title}
				onClick={toggleModal}
				style={style.bookCover}
			/>
			{showModal && (
				<div style={style.modalStyle.background}>
					<div style={style.modalStyle.modal}>
						<div className="close-button-container">
							<button
								type="button"
								className="button-accent-medium"
								onClick={toggleModal}
								style={style.modalStyle.modal.closeButton}
							>
								<span className="material-symbols-outlined">close</span>
							</button>
						</div>
						<div style={style.modalStyle.modal.contentGrid}>
							<img
								src={book_cover}
								alt={book_title}
								style={style.modalStyle.modal.contentGrid.bookCover}
							/>
							<div style={style.modalStyle.modal.contentGrid.content}>
								<h2 style={style.modalStyle.modal.contentGrid.content.title}>
									{book_title}
								</h2>
								<p style={style.modalStyle.modal.contentGrid.content.author}>
									by {book_author}{" "}
									<small
										style={style.modalStyle.modal.contentGrid.content.meta}
									>
										(Author)
									</small>
								</p>
								<p
									style={style.modalStyle.modal.contentGrid.content.description}
								>
									{book_description}
								</p>
								<small style={style.modalStyle.modal.contentGrid.content.meta}>
									Published in {published_year}. Total pages {total_pages}.
								</small>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
