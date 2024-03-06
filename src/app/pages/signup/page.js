"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import app from "../../api/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import supabase from "../../api/supabase";
import Link from "next/link";
import Navigation from "../../components/navigation/homepage/homeNavigation";
import Footer from "../../components/Footer";
import "./styles.css";
import { useEffect, useState } from "react";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Signup() {
	const signupValidation = Yup.object({
		fname: Yup.string()
			.min(1, "First name is too short")
			.max(20, "First name is too long")
			.required("Please enter your first name"),
		lname: Yup.string()
			.min(1, "Last name is too short")
			.max(20, "Last name is too long")
			.required("Please enter your last name"),
		email: Yup.string()
			.email("Please enter a valid email")
			.required("Please enter your email"),
		password: Yup.string()
			.min(8, "Password is too short. Password should be 8 to 20 characters")
			.max(20, "Password is too long. Password should be 8 to 20 characters")
			.required("Please enter a password"),
		cpassword: Yup.string()
			.oneOf([Yup.ref("password"), null], "Password does not match")
			.required("Please confirm your password"),
	});

	// adds user's UUI, first and last name to supabase database
	const [data, setData] = useState(null);
	async function insertDataToSupabase(userID, values) {
		const { data, error } = await supabase.from("users").insert([
			{
				uuid: `${userID}`,
				first_name: `${values.fname}`,
				last_name: `${values.lname}`,
			},
		]);

		if (error) {
			console.log("Error: Could not insert data into supabase.\n", error);
		} else {
			setData(data);
		}
	}

	const formik = useFormik({
		initialValues: {
			fname: "",
			lname: "",
			email: "",
			password: "",
			cpassword: "",
		},
		validationSchema: signupValidation,
		onSubmit: async (values) => {
			await sleep(500);
			// console.log("Submitted: " + values);
			// Initialize Firebase Authentication and get a reference to the service
			const auth = getAuth(app);
			createUserWithEmailAndPassword(auth, values.email, values.password)
				.then((userCredential) => {
					// the user signed up successfully
					const user = userCredential.user;
					// save user uuid, first and last name to database
					insertDataToSupabase(user.uid, values);
					// route user to search page
					window.location.href = "/pages/search";
				})
				.catch((error) => {
					// the user couldn't sign up successfullly
					const errorCode = error.code;
					const errorMessage = error.message;
					// ... console log error message
					alert(
						"Failed to Create User Account\n" +
							errorCode + ': "' + errorMessage + '"'
					);
					// refresh page
					window.location.href = "/pages/signup";
				});
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
								<label htmlFor="fname" className="bold space space-c">
									<span aria-label="required">First Name</span>
									{formik.errors.fname ? (
										<small>{formik.errors.fname}</small>
									) : (
										<small>Please enter your first name</small>
									)}
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
								<label htmlFor="lname" className="bold space space-c">
									<span aria-label="required">Last Name</span>
									{formik.errors.lname ? (
										<small>{formik.errors.lname}</small>
									) : (
										<small>Please enter your last name</small>
									)}
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
							{formik.errors.cpassword && (
								<small>{formik.errors.cpassword}</small>
							)}
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
						<Link href={"/pages/login"} className="underline">
							Login
						</Link>
					</p>
				</div>
				<div className="image-container"></div>
			</section>
			<Footer />
		</div>
	);
}
