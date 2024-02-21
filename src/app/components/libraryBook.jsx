
// FIXME: change book size based on mobile, tablet, and desktop
export default function LibraryBook () {
	const style = {
		bookImageContainer: {
			backgroundColor: "grey",
			width: "15rem",
			height: "20rem",
		}
	}
	return (
		<div className="book-container" style={style.bookContainer}>
			<div className="book-image-container" style={style.bookImageContainer}>
				<img src="" alt="" />
			</div>
		</div>
	);
}