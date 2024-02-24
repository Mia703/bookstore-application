import Navigation from "../../components/mainNavigation";
import Sidebar from "../../components/accountSidebar";
import Footer from "../../components/Footer";
import "./styles.css";

export default function Account() {
	return (
		<div id="account-page">
			<Navigation />
			<section className="account-section">
				<Sidebar />
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
