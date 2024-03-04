
// TODO: move styling from search.css to style component
export default function ScrollButton () {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="back-to-top-button">
			<button type="button" onClickCapture={scrollToTop}>
				<span className="material-symbols-outlined">expand_less</span>
			</button>
		</div>
	);
}