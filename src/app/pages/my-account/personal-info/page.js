"use client";
import { useFormik } from "formik";
import { auth, useSleep, userDetails } from "../../../api/methods";
import { firstNameValidation, lastNameValidation } from "../../../api/validations"
import Logged from "../../../components/notLogged/Logged";
import Navigation from "../../../components/navigation/allpages/mainNavigation";
import Sidebar from "../../../components/navigation/accountpage/accountSidebar";
import Footer from "../../../components/Footer";
import "./styles.css";

export default function UserInfo() {
	const user = auth.currentUser;
	const { updateFirstName, updateLastName, nameData }  = userDetails();
	const sleep = useSleep();

	// handle first name submit
	const formikFirstName = useFormik({
		initialValues: {
			newFirstName: "",
		},
		validationSchema: firstNameValidation,
		onSubmit: async (values) => {
			await sleep(500);
			updateFirstName(user.uid, values.newFirstName);
			await sleep(500);
			// window.location.href="/pages/my-account/personal-info"
		},
	});
	
	// handle last name submit
	const formikLastName = useFormik({
		initialValues: {
			newLastName: "",
		},
		validationSchema: lastNameValidation,
		onSubmit: async (values) => {
			await sleep(500);
			updateLastName(user.uid, values.newLastName);
			await sleep(500);
			window.location.href = "/pages/my-account/personal-info"
		},
	});
	
	if (user) {
		return (
			<div id="personal-information-page">
				<Navigation />
				<section className="personal-information-section">
					<Sidebar />
					<div className="form container">
						<h1>Personal Information</h1>
						<form onSubmit={formikFirstName.handleSubmit}>
							<label htmlFor="currentFirstname" className="bold">
								First Name
							</label>
							<input
								id="currentFirstname"
								name="currentFirstname"
								type="text"
								placeholder={nameData && `${nameData[0].first_name}`}
								disabled
							/>
							<label htmlFor="newFirstName" className="bold space">
								<span aria-label="required">New First Name</span>
								{formikFirstName.errors.newFirstName && (
									<small>{formikFirstName.errors.newFirstName}</small>
								)}
							</label>
							<input
								id="newFirstName"
								name="newFirstName"
								type="text"
								placeholder="Please enter your updated first name"
								onBlur={formikFirstName.handleBlur}
								onChange={formikFirstName.handleChange}
								value={formikFirstName.values.newFirstName}
							/>
							<button type="submit" className="button-highlight">
								Update First Name
							</button>
						</form>

						{/* the user's current last name */}
						<form onSubmit={formikLastName.handleSubmit}>
							<label htmlFor="currentLastname" className="bold">
								Last Name
							</label>
							<input
								id="currentLastname"
								name="currentLastname"
								type="text"
								placeholder={nameData && `${nameData[0].last_name}`}
								disabled
							/>

							<label htmlFor="newLastName" className="bold space">
								<span aria-label="required">New Last Name</span>
								{formikLastName.errors.newLastName && (
									<small>{formikLastName.errors.newLastName}</small>
								)}
							</label>
							<input
								id="newLastName"
								name="newLastName"
								type="text"
								placeholder="Please enter your updated last name"
								onBlur={formikLastName.handleBlur}
								onChange={formikLastName.handleChange}
								value={formikLastName.values.newLastName}
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
