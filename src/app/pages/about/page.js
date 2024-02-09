import Navigation from "../../components/homeNavigation";
import Footer from "../../components/Footer";
import "./styles.css";

export default function About() {
	return (
		<div id="about-page">
			<Navigation />
			<section className="about-section">
				<h1>About Us</h1>
				<p>Dear User,</p>
				<p>
					Thank you for using PanelSync! We are thrilled to share our passion
					for literature and technology with you. PanelSync is more than a
					digital library, it's a seamless way to manage your reading journey.
					Whether you're an avid bookworm or just getting started, track your
					progress, and discover new literary treasures with ease.
				</p>
				<p>
					PanelSync originated from a class project undertaken at the University
					of Denver in ICT 4300: Web Systems and Information I. This application
					serves the specific requirements of our assignment and any data
					collected will be promptly erased upon the conclusion of this course
					on March 16th, 2024.
				</p>
				<p>
					We sincerely appreciate your assistance and support. 
					<br />- The PanelSync Team
				</p>
			</section>
			<Footer />
		</div>
	);
}