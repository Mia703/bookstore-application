import Card from "./components/serviceCard";
import Question from "./components/fqaQuestion";
import "./styles.css";

export default function Home() {
	return (
		<main>
			<section className="welcome-section">
				<h1>Welcome to PanelSync</h1>
				<h2>
					Discover a simple way to take control of your reading progress and
					insights. Dive into a world of personalised tracking to enhance your
					book reading.
				</h2>
				<button type="button" className="button-highlight">
					Sign-up
				</button>
				<button type="button" className="button-accent-light">
					Login
				</button>
			</section>
			<section className="services-section">
				<h1>Everything you need</h1>
				<h2>All in one place</h2>
				<div className="service-card-grid">
					<Card
						title={"Progress Tracking"}
						body={
							"Add books to your personal library and keep track of your reading progress, future reads"
						}
					/>
					<Card
						title={"Insightful Analytics"}
						body={
							"Add private notes and reviews for books you have read, and revisit them later."
						}
					/>
					<Card
						title={"All Private"}
						body={"Your collection is private. No one else can see it but you."}
					/>
				</div>
			</section>
			<section className="questions-section">
				<div className="left-container">
					<h1>Frequently Asked Questions</h1>
					<h2>
						Can't find the answer you're looking for?{" "}
						<a href="mailto:amya.moore@du.edu">Email us</a>.
					</h2>
				</div>
				<div className="right-container">
					<Question
						question={"How does PanelSync work?"}
						answer={
							"First, sign-up and create your personalised account to unlock a world of reading possibilities. Then start building your digital library by adding your favourite books. As your reading journey unfolds, document your progress."
						}
					/>
					<Question
						question={"Some question here?"}
						answer={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis eleifend quam. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing."
						}
					/>
				</div>
			</section>
		</main>
	);
}
