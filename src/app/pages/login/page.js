"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link"
import app from "../../firebase/clientApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";;
import Navigation from "../../components/homeNavigation";
import Footer from "../../components/Footer";
import "./styles.css";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export default function Login() {
	// validates that email and password are in correct format
	const loginValidation = Yup.object({
		email: Yup.string()
			.email("Please enter a valid email")
			.required("Please enter your email"),
		password: Yup.string()
			.min(8, "Password is too short")
			.max(20, "Password is too long")
			// .matches(
			// 	/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$)$/,
			// 	"Please enter a valid password"
			// )
			.required("Please enter your password"),
	});

	// calls the formik dependency
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: loginValidation,
		onSubmit: async (values) => {
			await sleep(500);
			// console.log(values);
			const auth = getAuth(app);
			signInWithEmailAndPassword(auth, values.email, values.password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					// ...route user to search page
					window.location.href = "/pages/search";
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// alert error message
					alert("Failed to Log in User\n" + errorCode + ": " + errorMessage);
					// refresh pages
					window.location.href="/pages/login";
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
								{/* TODO: add functionality for user to reset password; firebase */}
								{/* https://support.google.com/firebase/answer/7000714 */}
								<Link href={"#"} className="underline bold">
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
