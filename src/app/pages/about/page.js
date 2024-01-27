import Navigation from "../../components/homeNavigation";
import Footer from "../../components/Footer";
import "./aboutStyles.css";

export default function About() {
	return (
		<div className="about-page-container">
			<Navigation />
			<section className="about-section">
				<h1>About Us</h1>
				<p>Dear User,</p>
				<p>
					Thank you for using PanelSync! We are thrilled to share our passion
					for literature and technology with you. PanelSync is more than just a
					digital library; it's a seamless way to manage your reading journey.
					Whether you're an avid bookworm or just getting started, our
					application empowers you to organise your reading list, track your
					progress, and discover new literary treasures with ease.
				</p>
				<p>
					PanelSync originated from a class project undertaken at the University
					of Denver in ICT 4300: Web Systems and Information I. This application
					serves the specific requirements of our assignment and any data
					collected will be promptly erased upon the conclusion of this course
					on March 16th, 2024. We sincerely appreciate your assistance and
					support.
				</p>
				<p>
					- The PanelSync Team
				</p>
			</section>
			<Footer />
		</div>
	);
}