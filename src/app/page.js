import Navigation from "./components/homeNavigation";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./styles.css";

export default function Home() {
	return (
		<main>
			<Navigation />
			<section className="welcome-section">
				<div className="text-container">
					<h1>Find and track the book you're looking for.</h1>
					<h2>
						Discover a simple way to take control of your reading progress and
						insights. Dive into a world of personalised tracking to enhance your
						book reading.
					</h2>
					<a href={"/pages/signup"} className="a-button-link">
						<button type="button" className="button-highlight">
							<span className="bold">Sign up now</span>
						</button>
					</a>
				</div>
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
				<h1>How does PanelSync work?</h1>
				<div>
					<ol>
						<li>
							<span className="bold">Sign up:</span> Create your personalised
							account to unlock a world of reading possibilities.
						</li>
						<li>
							<span className="bold">Add your favourites:</span> Build your
							digital library by adding your favourite books.
						</li>
						<li>
							<span className="bold">Track your progress:</span> As your reading
							journey unfolds, document your progress.
						</li>
					</ol>
				</div>
			</section>
			<Footer />
		</main>
	);
}
