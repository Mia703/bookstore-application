import Navigation from "../../components/homeNavigation";
import "./loginStyles.css";

export default function Login() {
	return (
		<div className="login-page-container">
			<Navigation />
			<section className="login-section">
				<div className="form-container login">
					<form action="">
						<h1>Login</h1>
						<div className="form-inputs-container">
							<label htmlFor="email">
								My email is <span aria-label="required">* </span>
							</label>
							<input type="email" name="user-email" id="email" required />

							<label htmlFor="password">
								<br /> My password is <span aria-label="required">* </span>
							</label>
							<input type="password" name="password" id="password" required />
							<label htmlFor="">.</label>
						</div>
						<button type="submit" className="button-highlight">
							Login
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
