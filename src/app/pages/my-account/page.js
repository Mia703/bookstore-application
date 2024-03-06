"use client";
import { auth } from "../../api/methods";
import Logged from "../../components/notLogged/Logged";
import Navigation from "../../components/navigation/allpages/mainNavigation";
import Sidebar from "../../components/navigation/accountpage/accountSidebar";
import Footer from "../../components/Footer";
import "./styles.css";

export default function Account() {
	const user = auth.currentUser;
	if (user) {
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
								<p className="card-title bold">Favourite genre</p>
								<p className="number">num</p>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		);
	} else {
		return <Logged />;
	}
}
