import Navigation from "../../components/homeNavigation";
import "./signupStyles.css";
// <label for="name">Name:</label> <input type="text" id="name" name="user_name" />

export default function Signup() {
	return (
		<div className="signup-page-container">
			<Navigation />
			<section className="signup-section">
				<div className="form-container signup">
					<form action="">
						<h1 className="form-title">Sign-up</h1>
						<div className="form-inputs-container">
							<label htmlFor="fname">
								My first name is <span aria-label="required">*</span>{" "}
							</label>
							<input
								type="text" name="first-name" id="fname" placeholder="name" required
							/>

							<label htmlFor="lname">
								<br /> My last name is <span aria-label="required">*</span>{" "}
							</label>
							<input type="text" name="last-name" id="lname" required />

							<label htmlFor="email">
								<br /> My email is <span aria-label="required">*</span>{" "}
							</label>
							<input type="email" name="-user-email" id="email" required />

							<label htmlFor="password">
								<br /> I want my password to be{" "}
								<span aria-label="required">*</span>{" "}
							</label>
							<input type="password" name="password" id="password" required />

							<label htmlFor="confirmed-password">
								<br /> I want to re-confirm that my password is{" "}
								<span aria-label="required">*</span>{" "}
							</label>
							<input
								type="password"
								name="confirmed-password"
								id="confirmed-password"
								required
							/>
							<label>.</label>
						</div>
						<button type="submit" className="button-highlight">
							Sign-up
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
