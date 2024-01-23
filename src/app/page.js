import Card from "./components/Card";
import Question from "./components/Question";
import "./styles.css"

export default function Home() {
	return (
		<main>
			<section className="header-section">
				<h1 className="title">Welcome to PanelSync</h1>
				<h2 className="description">
					Discover a simple way to take control of your reading progress. Dive
					into a world of personalised tracking to enhance your manwha reading.
				</h2>
				<div className="image-container"></div>
				<div className="button-container">
					<button type="button" className="button-white">Signup</button>
					<button type="button" className="button-accent-two">Login</button>
				</div>
			</section>
			<section className="services-section">
				<h1>Everything you need all in one place</h1>
				<div className="service-container">
					<Card
						title={"Progress Tracking"}
						body={
							"Add manhwa to your personal collection and keep track of your reading progress, future reads, and completed manhwa."
						}
					/>
					<Card
						title={"Insightful Analytics"}
						body={
							"Add private notes and reviews for manwha you've read, and revisit them later."
						}
					/>
					<Card
						title={"All Private"}
						body={"Your collection is private. No one else can see it but you."}
					/>
				</div>
			</section>
			<section className="questions-section">
				<h1>Frequently Asked Questions</h1>
				<p>
					Can't find the answer you're looking for?{" "}
					<a href="mailto:bookworm7572@gmail.com">Email us</a>
				</p>
				<div className="question-container">
					<Question
						question={"How does PanelSync work?"}
						answer={
							"First, signup and create an account. " +
              "Then start searching for manwha, adding what you are currently reading, want to read, and have read to your personal library."
						}
					/>
					<Question
						question={"Is there a mobile app?"}
						answer={
							"No, not yet. We are currently still maximising the possibilities of our web application."
						}
					/>
				</div>
			</section>
		</main>
	);
}
