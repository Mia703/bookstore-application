"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import app from "../../firebase/clientApp";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Navigation from "../../components/homeNavigation";
import Footer from "../../components/Footer";
import "./styles.css";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export default function PasswordReset() {

	const emailValidation = Yup.object({
		email: Yup.string().email("Please enter a valid email").required("Please enter your email")
	});

	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: emailValidation,
		onSubmit: async (values) => {
			await sleep(500);
			const auth = getAuth(app);
			sendPasswordResetEmail(auth, values.email)
				.then(() => {
					// Password reset email sent!
					// TODO: display "Password reset email has been sent" as html
					alert("Password reset email has been sent!");
					window.location.href="/pages/login";
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// alert error message
					alert("Failed to send password reset email.\n" + errorCode + ": " + errorMessage);
					// refresh page
					window.location.href="/pages/passwordreset";
				});
		}
	});
	return (
		<div id="reset-page">
			<Navigation />
			<section className="reset-section">
				<div className="left-container">
					<h1>Forgot your password?</h1>
					<h2>
						That's okay, it happens! Enter your email below to reset your
						password.
					</h2>
					<form onSubmit={formik.handleSubmit}>
						<label htmlFor="email" className="space bold">
							<span aria-label="required">Email</span>
							{formik.errors.email && <small>{formik.errors.email}</small>}
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.email}
						/>
						<button type="submit" className="button-highlight">
							Reset password
						</button>
					</form>
				</div>
				<div className="image-container"></div>
			</section>
			<Footer />
		</div>
	);
}
