"use client";
import { useFormik } from "formik";
import { emailValidation } from "../../api/validations";
import { auth, useSleep } from "../../api/methods"
import { sendPasswordResetEmail } from "firebase/auth";
import Navigation from "../../components/navigation/homepage/homeNavigation";
import Footer from "../../components/Footer";
import "./styles.css";

export default function PasswordReset() {
	const sleep = useSleep();
	
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: emailValidation,
		onSubmit: async (values) => {
			await sleep(500);
			sendPasswordResetEmail(auth, values.email)
				.then(() => {
					alert("Password reset email sent! Please check your email");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// alert error message
					alert(
						"Failed to send password reset email.\n" +
							errorCode +
							": " +
							errorMessage
					);
					// refresh page
					window.location.href = "/pages/passwordreset";
				});
		},
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
