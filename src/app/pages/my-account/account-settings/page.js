"use client";
import { useFormik } from "formik";
import { auth, useSleep } from "../../../api/methods";
import { updateEmail, updatePassword } from "firebase/auth";
import {
	newEmailValidation,
	newPasswordValidation,
} from "../../../api/validations";
import Logged from "../../../components/notLogged/Logged";
import Navigation from "../../../components/navigation/allpages/mainNavigation";
import Sidebar from "../../../components/navigation/accountpage/accountSidebar";
import Footer from "../../../components/Footer";
import "./styles.css";

export default function AccountSettings() {
	const user = auth.currentUser;
	const sleep = useSleep();

	const formikEmail = useFormik({
		initialValues: {
			newEmail: "",
		},
		validationSchema: newEmailValidation,
		onSubmit: async (values) => {
			await sleep(500);
			updateEmail(auth.currentUser, `${values.newEmail}`)
				.then(() => {
					// Email updated!
					// go to login page
					window.location.href = "/pages/login";
				})
				.catch((error) => {
					alert("Failed to update user email.\n" + error);
					// refresh page? -- clear form
					formikEmail.resetForm({
						newEmail: "",
					});
				});
		},
	});

	const formikPassword = useFormik({
		initialValues: {
			newPassword: "",
			confirmPassword: "",
		},
		validationSchema: newPasswordValidation,
		onSubmit: async (values) => {
			await sleep(500);
			const newPassword = `${values.newPassword}`;
			updatePassword(user, newPassword)
				.then(() => {
					// Update successful.
					// go to login page
					window.location.href = "/pages/login";
				})
				.catch((error) => {
					// An error occurred
					alert("Failed to update user password.\n" + error);
					// refresh page? -- clear form
					formikPassword.resetForm({
						newPassword: "",
						confirmPassword: "",
					});
				});
		},
	});

	if (user) {
		return (
			<div id="account-settings-page">
				<Navigation />
				<section className="account-settings-section">
					<Sidebar />
					<div className="form container">
						<h1>Account Settings</h1>
						<div className="email-container">
							<h2>Email Address</h2>
							<form onSubmit={formikEmail.handleSubmit}>
								{/* TODO: add user's current email */}
								<label htmlFor="currentEmail" className="bold">
									Current Email Address
								</label>
								<input
									id="currentEmail"
									name="currentEmail"
									type="email"
									placeholder="[user's current email address]"
									disabled
								/>
								<label htmlFor="newEmail" className="bold space">
									<span aria-label="required">New Email Address</span>
									{formikEmail.errors.newEmail && (
										<small>{formikEmail.errors.newEmail}</small>
									)}
								</label>
								<input
									id="newEmail"
									name="newEmail"
									type="email"
									placeholder="Enter new email address"
									onBlur={formikEmail.handleBlur}
									onChange={formikEmail.handleChange}
									value={formikEmail.values.newEmail}
								/>
								<button type="submit" className="button-highlight">
									Update Email Address
								</button>
							</form>
						</div>

						<div className="password-container">
							<h2>Password</h2>
							<form onSubmit={formikPassword.handleSubmit}>
								<label htmlFor="currentPassword" className="bold">
									Current Password
								</label>
								<input
									type="password"
									name="currentPassword"
									id="currentPassword"
									placeholder="********"
									disabled
								/>

								<label htmlFor="newPassword" className="bold space">
									<span aria-label="required">New Password</span>
									{formikPassword.errors.newPassword && (
										<small>{formikPassword.errors.newPassword}</small>
									)}
								</label>
								<input
									id="newPassword"
									name="newPassword"
									type="password"
									placeholder="Enter new password"
									onBlur={formikPassword.handleBlur}
									onChange={formikPassword.handleChange}
									value={formikPassword.values.newPassword}
								/>

								<label htmlFor="confirmPassword" className="bold space">
									<span aria-label="required">Confirm New Password</span>
									{formikPassword.errors.confirmPassword && (
										<small>{formikPassword.errors.confirmPassword}</small>
									)}
								</label>
								<input
									id="confirmPassword"
									name="confirmPassword"
									type="password"
									placeholder="Confirm your password"
									onBlur={formikPassword.handleBlur}
									onChange={formikPassword.handleChange}
									value={formikPassword.values.confirmPassword}
								/>
								<button type="submit" className="button-highlight">
									Update Password
								</button>
							</form>
						</div>

						<div className="clear-container">
							{/* TODO: add functionality to clear library and delete account */}
							<div className="clear-library-container">
								<h2>Clear Library</h2>
								<p>
									Would you like to clear your library? This is an irreversible
									action that cannot be undone. All information regarding,
									books, reviews, comments, etc. will be permanently erased. If
									you would like to proceed, please email us at{" "}
									<a href="mailto:panelsyncteam@gmail.com" className="bold">
										panelsyncteam@gmail.com
									</a>
									.
								</p>
								{/* <button type="submit" className="button-accent-dark">
									Clear Library
								</button> */}
							</div>
							<div className="delete-account-container">
								<h2>Delete Account</h2>
								<p>
									Would you like to delete you account? This is an irreversible
									action that cannot be undone. All information about you and
									the information stored in your library will be permanently
									deleted. If you would like to proceed, please email us at{" "}
									<a href="mailto:panelsyncteam@gmail.com" className="bold">
										panelsyncteam@gmail.com
									</a>
									.
								</p>
								{/* <button type="submit" className="button-accent-dark">
									Delete Account
								</button> */}
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
