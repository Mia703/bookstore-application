import Navigation from "../../components/homeNavigation";
import "./signupStyles.css";

export default function Signup() {
	return (
		<div className="signup-page-container">
			<Navigation />
			<section className="signup-section">
				<div className="form-container signup">
					<form action="">
						<h1>Sign-up</h1>
						<h2>
							My name is{" "}
							<span>
								<input type="text" name="" id="" />
							</span>{" "}
							and my email is{" "}
							<span>
								<input type="email" name="" id="" />
							</span>
							. <br />I would like my password to be{" "}
							<span>
								<input type="password" name="" id="" />
							</span>
							. I want to re-confirm that my password is{" "}
							<span>
								<input type="password" name="" id="" />
							</span>
							.
						</h2>
						<button type="submit" className="button-highlight">Sign-up</button>
					</form>
				</div>
			</section>
		</div>
	);
}
