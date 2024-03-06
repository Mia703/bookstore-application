"use client";
import { useFormik } from "formik";
import { auth, sleep } from "../../api/methods";
import { loginValidation } from "../../api/validations";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import Navigation from "../../components/navigation/homepage/homeNavigation";
import Footer from "../../components/Footer";
import "./styles.css";

export default function Login() {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: loginValidation,
		onSubmit: async (values) => {
			await sleep(500);
			signInWithEmailAndPassword(auth, values.email, values.password)
				.then((userCredential) => {
					// the user is log in
					const user = userCredential.user;
					// route user to search page
					window.location.href = "/pages/search";
				})
				.catch((error) => {
					// the user couldn't log in
					const errorCode = error.code;
					const errorMessage = error.message;
					// alert error message
					alert("Failed to Log in User.\n" + errorCode + ": \"" + errorMessage + "\"");
					// refresh page
					window.location.href = "/pages/login";
				});
		},
	});

	return (
		<div id="login-page">
			<Navigation />
			<section className="login-section">
				<div className="left-container">
					<h1>Login to PanelSync</h1>
					<h2>Enter your email and password to access your account.</h2>
					<form onSubmit={formik.handleSubmit}>
						<label htmlFor="email" className="space bold">
							<span aria-label="required">Email</span>
							{formik.errors.email && <small>{formik.errors.email}</small>}
						</label>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="Enter your email"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.email}
						/>
						<label htmlFor="password" className="space bold">
							<span aria-label="required">Password</span>
							{formik.errors.password && (
								<small>{formik.errors.password}</small>
							)}
						</label>
						<input
							id="password"
							name="password"
							type="password"
							placeholder="Enter your password"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
						<div className="forgot-container">
							<small>
								<Link href={"/pages/passwordreset"} className="underline bold">
									Forgot?
								</Link>
							</small>
						</div>
						<button type="submit" className="button-highlight">
							Login
						</button>
					</form>
					<p>
						Don't have an account?{" "}
						<a href={"/pages/signup"} className="underline">
							Sign up
						</a>
					</p>
				</div>
				<div className="image-container"></div>
			</section>
			<Footer />
		</div>
	);
}
