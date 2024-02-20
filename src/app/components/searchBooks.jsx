
export default function SearchBooks() {
	const style = {
		container: {
			display: 'grid',
			gridTemplateColumns: 'max-content max-content',
			gap: '10px'
		},
		bookContainer: {
			backgroundColor: 'grey',
			width: '10rem',
			height: '15rem',
		},
		dropDownContainer: {
			display: 'flex',
			flexDirection: 'column',
		},
		firstButton: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'start',
			backgroundColor: 'var(--highlight)',
			marginBottom: '0.5rem'
		},
		buttonStyle: {
			marginBottom: '0.5rem',
		},
		textStyle: {
			marginBottom: '1rem',
		}
	};

	return (
		<div className="container" style={style.container}>
			<div className="book-container" style={style.bookContainer}>
				<img src="" alt="" />
			</div>

			<div className="content-container">
				<h2 className="title bold" style={style.textStyle}>Title</h2>
				<p className="author" style={style.textStyle}>Author</p>
				<p className="desc" style={style.textStyle}>Description</p>
				
				<div className="button-dropdown-container" style={style.dropDownContainer}>
					<button type="button" className="bold" style={style.firstButton}>
						Add to library
						<span class="material-symbols-outlined">expand_more</span>
					</button>
					<button type="button" style={style.buttonStyle}>Reading</button>
					<button type="button" style={style.buttonStyle}>Want to Read</button>
					<button type="button" style={style.buttonStyle}>Read</button>
					<button type="button" style={style.buttonStyle}>No longer want to read</button>
				</div>
			</div>
		</div>
	);
}