import Navigation from "../../components/homeNavigation";
import "./signupStyles.css";

export default function Signup() {
	return (
		<div className="signup-page-container">
			<Navigation />
			<section className="signup-section">
				<div className="form-container signup">
					<form action="#">
						<h1 className="form-title">Sign-up</h1>
						<div className="form-inputs-container">
							<label htmlFor="full-name">Hi, my name is </label>
							<input
								type="text"
								name="name"
								id="full-name"
								placeholder="Enter your first name"
								required
							/>

							<label htmlFor="email">
								{" "}
								<span aria-label="required">*</span> and my email is{" "}
							</label>
							<input
								type="email"
								name="user-email"
								id="email"
								placeholder="Your email address"
								required
							/>

							<label htmlFor="password">
								<span aria-label="required">*</span> and I want to sign-up for
								PanelSync with{" "}
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Enter your password"
								required
							/>
							<label>
								<span aria-label="required">*</span> as my password.
							</label>

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
