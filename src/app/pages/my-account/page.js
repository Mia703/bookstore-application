import Navigation from "../../components/mainNavigation";
import Footer from "../../components/Footer";
import Link from "next/link";
import "./styles.css";

export default function Account() {
	return (
		<div id="account-page">
			<Navigation />
			<section className="account-section">
				<div className="sidebar">
					<div className="image-container">
						<div className="container">
							<img src="" alt="[User's name]" />
						</div>
						<h1>[Name]</h1>
					</div>

					<ul className="account-nav-list">
						<li className="account-list-item">
							<Link href={"#"} className="account-link">
								Reading Insights
							</Link>
						</li>
						<li className="account-list-item">
							<Link href={"#"} className="account-link">
								User Info
							</Link>
						</li>
						<li className="account-list-item">
							<Link href={"#"} className="account-link">
								Account Settings
							</Link>
						</li>
						<li className="account-list-item">
							<Link href={"/pages/login"} className="account-link">
								Log Out
							</Link>
						</li>
					</ul>
				</div>

				<div className="dashboard-container">
					<h1>Reading Insights</h1>
					<div className="dashboard">
						<div className="book-stat-card">
							<p className="card-title bold">Total # of books started</p>
							<p className="number">num</p>
						</div>
						<div className="book-stat-card">
							<p className="card-title bold">Total # of books finished</p>
							<p className="number">num</p>
						</div>
						<div className="book-stat-card">
							<p className="card-title bold">Average rating</p>
							<p className="number">num</p>
						</div>
						<div className="book-stat-card">
							<p className="card-title bold">Favorite genre</p>
							<p className="number">num</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
