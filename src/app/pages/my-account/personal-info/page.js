import Navigation from "../../../components/mainNavigation";
import Sidebar from "../../../components/accountSidebar";
import Footer from "../../../components/Footer";
import "./styles.css";

export default function UserInfo() {
	return (
		<div id="personal-information-page">
			<Navigation />
			<section className="personal-information-section">
				<Sidebar />
				<div className="form container">
					<h1>Personal Information</h1>
					<form>
						<label htmlFor="firstName" className="bold">First Name</label>
						<input
							id="firstName"
							name="firstName"
							type="text"
							placeholder="[User's current first name]"
							disabled
						/>

						<label htmlFor="newFirstName" className="bold">New First Name</label>
						<input
							id="newFirstName"
							name="newFirstName"
							type="text"
							placeholder="Please enter your updated first name"
						/>
						<button type="submit" className="button-highlight">Update First Name</button>
					</form>

					<form>
						<label htmlFor="lastName" className="bold">Last Name</label>
						<input
							id="lastName"
							name="lastName"
							type="text"
							placeholder="[User's current last name]"
							disabled
						/>

						<label htmlFor="newLastName" className="bold">New Last Name</label>
						<input
							id="newLastName"
							name="newLastName"
							type="text"
							placeholder="Please enter your updated last name"
						/>
						<button type="submit" className="button-highlight">Update Last Name</button>
					</form>
				</div>
			</section>
			<Footer />
		</div>
	);
}
