"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import app from "../../../api/firebase";
import { getAuth } from "firebase/auth";
import Logged from "../../../components/notLogged/Logged";
import Navigation from "../../../components/navigation/allpages/mainNavigation";
import Sidebar from "../../../components/navigation/accountpage/accountSidebar";
import Footer from "../../../components/Footer";
import supabase from "../../../api/supabase";
import { useState, useEffect } from "react";
import "./styles.css";

export default function UserInfo() {
	const auth = getAuth(app);
	const user = auth.currentUser;

	// ----------------- User's First Name -----------------
	// form validation
	const firstNameValidation = Yup.object({
		newFirstName: Yup.string()
			.min(5, "First name is too short")
			.max(20, "First name is too long")
			.required("Please enter your first name"),
	});

	const [firstNameData, setFirstName] = useState(null);
	async function updateFirstName(userID, values) {
		const { firstNameData, error } = await supabase
			.from("users")
			.update({ first_name: `${values.newFirstName}` })
			.eq("uuid", `${userID}`);

		if (error) {
			console.log("Error: Could not update data in supabase.\n", error);
		} else {
			setFirstName(firstNameData);
		}
	}

	// handle first name submit
	const formikFirstname = useFormik({
		initialValues: {
			newFirstName: "",
		},
		validationSchema: firstNameValidation,
		onSubmit: (values) => {
			updateFirstName(user.uid, values);
		},
	});

	// ----------------- User's Last Name -----------------
	const lastNameValidation = Yup.object({
		newLastName: Yup.string()
			.min(5, "Last name is too short")
			.max(20, "Last name is too long")
			.required("Please enter your last name"),
	});

	const formikLastname = useFormik({
		initialValues: {
			newLastName: "",
		},
		validationSchema: lastNameValidation,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const [returnNameData, setName] = useState(null);
	if (user) {
		// returns the user's first and last name
		useEffect(() => {
			async function fetchUserName() {
				const { returnNameData, error } = await supabase
					.from("users")
					.select("first_name, last_name")
					.eq("uuid", `${user.uid}`);

				if (error) {
					console.log("Error: Could not fetch user's name from supabase. ", error);
				} else {
					console.log(returnNameData)
					setName(returnNameData);
				}
			}
			fetchUserName();
		}, []);

		return (
			<div id="personal-information-page">
				<Navigation />
				<section className="personal-information-section">
					<Sidebar />
					<div className="form container">
						<h1>Personal Information</h1>
						<form onSubmit={formikFirstname.handleSubmit}>
							{/* the user's current first name */}
							<label htmlFor="currentFirstname" className="bold">
								First Name
							</label>
							<input
								id="currentFirstname"
								name="currentFirstname"
								type="text"
								placeholder={
									returnNameData ? `${returnNameData[0].first_name}` : ""
								}
								disabled
							/>

							{/* the user's updated name */}
							<label htmlFor="newFirstName" className="bold space">
								<span aria-label="required">New First Name</span>
								{formikFirstname.errors.newFirstName && (
									<small>{formikFirstname.errors.newFirstName}</small>
								)}
							</label>
							<input
								id="newFirstName"
								name="newFirstName"
								type="text"
								placeholder="Please enter your updated first name"
								onBlur={formikFirstname.handleBlur}
								onChange={formikFirstname.handleChange}
								value={formikFirstname.values.newFirstName}
							/>
							<button type="submit" className="button-highlight">
								Update First Name
							</button>
						</form>

						{/* the user's current last name */}
						<form onSubmit={formikLastname.handleSubmit}>
							<label htmlFor="currentLastname" className="bold">
								Last Name
							</label>
							<input
								id="currentLastname"
								name="currentLastname"
								type="text"
								placeholder={
									returnNameData ? `${returnNameData[0].last_name}` : ""
								}
								disabled
							/>

							<label htmlFor="newLastName" className="bold space">
								<span aria-label="required">New Last Name</span>
								{formikLastname.errors.newLastName && (
									<small>{formikLastname.errors.newLastName}</small>
								)}
							</label>
							<input
								id="newLastName"
								name="newLastName"
								type="text"
								placeholder="Please enter your updated last name"
								onBlur={formikLastname.handleBlur}
								onChange={formikLastname.handleChange}
								value={formikLastname.values.newLastName}
							/>
							<button type="submit" className="button-highlight">
								Update Last Name
							</button>
						</form>
					</div>
				</section>
				<Footer />
			</div>
		);
	} else {
		return <Logged />;
	}
}
