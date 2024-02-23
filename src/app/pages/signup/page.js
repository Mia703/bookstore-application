"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navigation from "../../components/homeNavigation";
import Footer from "../../components/Footer";
import "./styles.css";

export default function Signup() {
	const signupValidation = Yup.object({
		fname: Yup.string()
			.min(5, "First name is too short")
			.max(20, "First name is too long")
			.required("Please enter your first name"),
		lname: Yup.string()
			.min(5, "Last name is too short")
			.max(20, "Last name is too long")
			.required("Please enter your last name"),
		email: Yup.string()
			.email("Please enter a valid email")
			.required("Please enter your email"),
		password: Yup.string()
			.min(8, "Password is too short")
			.max(20, "Password is too long")
			.required("Please enter a password"),
		cpassword: Yup.string()
			.oneOf([Yup.ref("password")], "Password does not match")
			.required("Please confirm your password"),
	});

	const formik = useFormik({
		initialValues: {
			fname: "",
			lname: "",
			email: "",
			password: "",
			cpassword: "",
		},
		validationSchema: signupValidation,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div id="signup-page">
			<Navigation />
			<section className="signup-section">
				<div className="left-container">
					<h1>Sign up to PanelSync</h1>
					<h2>Enter your name, email, and password to create an account.</h2>
					<form onSubmit={formik.handleSubmit}>
						<div className="name-container">
							<div>
								<label htmlFor="fname" className="bold space-c">
									<span aria-label="required">First Name</span>
									{formik.errors.fname ? <small>{formik.errors.fname}</small> : <small>Please enter your first name</small>}
								</label>
								<input
									id="fname"
									name="fname"
									type="text"
									placeholder="Enter your first name"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									value={formik.values.fname}
								/>
							</div>
							<div>
								<label htmlFor="lname" className="bold space-c">
									<span aria-label="required">Last Name</span>
									{formik.errors.lname ? <small>{formik.errors.lname}</small> : <small>Please enter your last name</small>}
								</label>
								<input
									id="lname"
									name="lname"
									type="text"
									placeholder="Enter your last name"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									value={formik.values.lname}
								/>
							</div>
						</div>
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
						<label htmlFor="cpassword" className="space bold">
							<span aria-label="required">Confirm Password</span>
							{formik.errors.cpassword && <small>{formik.errors.cpassword}</small>}
						</label>
						<input
							id="cpassword"
							name="cpassword"
							type="password"
							placeholder="Confirm your password"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.cpassword}
						/>
						<button type="submit" className="button-highlight">
							Sign Up
						</button>
					</form>
					<p>
						Already have an account?{" "}
						<a href={"/pages/login"} className="underline">
							Login
						</a>
					</p>
				</div>
				<div className="image-container"></div>
			</section>
			<Footer />
		</div>
	);
}
