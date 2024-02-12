

export default function SearchBooks() {
	return (
		<div className="container">
			<div className="book-container">
				<img src="" alt="" />
			</div>
			
			<div className="content-container">
				<h2>Title</h2>
				<p>Author</p>
				<p>Description</p>
				<div className="button-dropdown-container">
					<button type="button">Add to library</button>
					<button type="button">Reading</button>
					<button type="button">Want to Read</button>
					<button type="button">Read</button>
					<button type="button">No longer want to read</button>
				</div>
			</div>
		</div>
	);
}