import Navigation from "../../../components/mainNavigation";
import Sidebar from "../../../components/accountSidebar";
import Footer from "../../../components/Footer";
import "./styles.css";

export default function AccountSettings() {
	return (
		<div id="account-settings-page">
			<Navigation />
			<section className="account-settings-section">
				<Sidebar />
				<div className="form container">
					<h1>Account Settings</h1>
					<div className="email-container">
						<h2>Email Address</h2>
						<form action="">
							<label htmlFor="cemail" className="bold">Current Email Address</label>
							<input
								type="email"
								name="cemail"
								id="cemail"
								placeholder="[user's current email address]"
								disabled
							/>
							<label htmlFor="nemail" className="bold">New Email ADdress</label>
							<input
								type="email"
								name="nemail"
								id="nemail"
								placeholder="Enter new email address"
							/>
							<button type="submit" className="button-highlight">
								Update Email Address
							</button>
						</form>
					</div>

					<div className="password-container">
						<h2>Password</h2>
						<form action="">
							<label htmlFor="cpassword" className="bold">Current Password</label>
							<input
								type="password"
								name="cpassword"
								id="cpassword"
								placeholder="[user's current password]"
								disabled
							/>

							<label htmlFor="npassword" className="bold">New Password</label>
							<input
								type="password"
								name="npassword"
								id="npassword"
								placeholder="Enter new password"
							/>

							<label htmlFor="confirmpassword">Confirm New Password</label>
							<input
								type="password"
								name="confirmpassword"
								id="confirmpassword"
								placeholder="Confirm your password"
							/>
							<button type="submit" className="button-highlight">
								Update Password
							</button>
						</form>
					</div>

					<div className="clear-container">
						<div className="clear-library-container">
							<h2>Clear Library</h2>
							<p>
								Would you like to clear your library? This is an irreversible
								action that cannot be undone. All information regarding, books,
								reviews, comments, etc. will be permanently erased. If you would
								like to proceed, please press the button below.
							</p>
							<button type="submit" className="button-accent-dark">
								Clear Library
							</button>
						</div>
						<div className="delete-account-container">
							<h2>Delete Account</h2>
							<p>
								Would you like to delete you account? This is an irreversible
								action that cannot be undone. All information about you and the
								information stored in your library will be permanently deleted.
								If you would like to proceed, press the button below.
							</p>
							<button type="submit" className="button-accent-dark">
								Delete Account
							</button>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
