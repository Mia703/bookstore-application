import Navigation from "../../components/mainNavigation";
import Footer from "../../components/Footer";
import "./styles.css";

export default function Account() {
	return (
		<div id="account-page">
			<Navigation />
			<section className="account-section">
				<div className="sidebar">
					<a href="#my-account">My Account</a>
					<a href="#profile">Profile</a>
					<a href="#password">Password</a>
					<a href="#settings">Settings</a>
				</div>
				<div className="container">
					<h1>Welcome, (Name)</h1>
					<img
						src="https://i.pinimg.com/736x/59/cf/f9/59cff97550efef9af0940d1f9e33652a.jpg"
						alt="profile image"
						className="image"
					></img>
					<div className="dashboard">
						<div className="book-stat-card">
							<p>Total # of books started</p>
						</div>
						<div className="book-stat-card">
							<p>Total # of books finished</p>
						</div>
						<div className="book-stat-card">
							<p>Average rating</p>
						</div>
						<div className="book-stat-card">
							<p>Favorite genre</p>
						</div>
					</div>
					<p className="sign-out">
						From your account dashboard, you can edit your{" "}
						<a href="#profile">profile details</a> and{" "}
						<a href="#password">edit your password</a>.
					</p>
					<p className="sign-out">
						Not (Name)? <a href="#sign-out-link">Sign out</a>
					</p>
				</div>
			</section>
			<Footer />
		</div>
	);
}
