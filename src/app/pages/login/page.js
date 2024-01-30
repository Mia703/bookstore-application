import Navigation from "../../components/homeNavigation";
import "./loginStyles.css";

export default function Login() {
	return (
		<div className="login-page-container">
			<Navigation />
			<section className="login-section">
				<div className="form-container login">
					<form action="#">
						<h1>Login</h1>
						<div className="form-inputs-container">
							<label htmlFor="email">My email is </label>
							<input
								type="email"
								name="user-email"
								id="email"
								placeholder="Enter your email"
								required
							/>

							<label htmlFor="password">
								<span aria-label="required">* </span>and my password is{" "}
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Enter your password"
								required
							/>
							<label htmlFor="">
								<span aria-label="required">* </span>.
							</label>
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
