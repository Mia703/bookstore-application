"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import app from "../../../api/firebase"
import { getAuth } from "firebase/auth";
import Logged from "../../../components/notLogged/Logged"
import Navigation from "../../../components/navigation/allpages/mainNavigation";
import Sidebar from "../../../components/navigation/accountpage/accountSidebar";
import Footer from "../../../components/Footer";
import "./styles.css";

export default function UserInfo() {
	const firstnameValidation = Yup.object({
		newFirstname: Yup.string()
			.min(5, "First name is too short")
			.max(20, "First name is too long")
			.required("Please enter your first name"),
	});

	const lastnameValidation = Yup.object({
		newLastname: Yup.string()
			.min(5, "Last name is too short")
			.max(20, "Last name is too long")
			.required("Please enter your last name"),
	});

	const formikFirstname = useFormik({
		initialValues: {
			newFirstname: "",
		},
		validationSchema: firstnameValidation,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const formikLastname = useFormik({
		initialValues: {
			newLastname: "",
		},
		validationSchema: lastnameValidation,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const auth = getAuth(app);
	const user = auth.currentUser;
	if (user) {
		return (
			<div id="personal-information-page">
				<Navigation />
				<section className="personal-information-section">
					<Sidebar />
					<div className="form container">
						<h1>Personal Information</h1>
						<form onSubmit={formikFirstname.handleSubmit}>
							{/* TODO: add user's first name */}
							<label htmlFor="currentFirstname" className="bold">
								First Name
							</label>
							<input
								id="currentFirstname"
								name="currentFirstname"
								type="text"
								placeholder="[User's current first name]"
								disabled
							/>
	
							<label htmlFor="newFirstname" className="bold space">
								<span aria-label="required">New First Name</span>
								{formikFirstname.errors.newFirstname && (
									<small>{formikFirstname.errors.newFirstname}</small>
								)}
							</label>
							<input
								id="newFirstname"
								name="newFirstname"
								type="text"
								placeholder="Please enter your updated first name"
								onBlur={formikFirstname.handleBlur}
								onChange={formikFirstname.handleChange}
								value={formikFirstname.values.newFirstname}
							/>
							<button type="submit" className="button-highlight">
								Update First Name
							</button>
						</form>
	
						<form onSubmit={formikLastname.handleSubmit}>
							{/* TODO: add user's last name */}
							<label htmlFor="currentLastname" className="bold">
								Last Name
							</label>
							<input
								id="currentLastname"
								name="currentLastname"
								type="text"
								placeholder="[User's current last name]"
								disabled
							/>
	
							<label htmlFor="newLastname" className="bold space">
								<span aria-label="required">New Last Name</span>
								{formikLastname.errors.newLastname && (
									<small>{formikLastname.errors.newLastname}</small>
								)}
							</label>
							<input
								id="newLastname"
								name="newLastname"
								type="text"
								placeholder="Please enter your updated last name"
								onBlur={formikLastname.handleBlur}
								onChange={formikLastname.handleChange}
								value={formikLastname.values.newLastname}
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
	}
	else {
		return (
			<Logged />
		);
	}
}
