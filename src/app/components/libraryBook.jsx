
export default function LibraryBook() {
	const style = {
		bookImageContainer: {
			backgroundColor: "grey",
			width: "15rem",
			height: "20rem",
			cursor: "pointer",
		},
	};
	return (
		<div className="book-container" style={style.bookContainer}>
			<div className="book-image-container" style={style.bookImageContainer}>
				<img src="" alt="" />
			</div>
		</div>
	);
}
