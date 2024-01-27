import Navigation from "../../components/homeNavigation"
import "./loginStyles.css"

export default function Login() {
	return (
		<div className="login-page-container">
			<Navigation />
			<section className="login-section">
				<div className="form-container login">
					<form action="">
						<h1>Login</h1>
						<h2>
							My email is{" "}
							<span>
								<input type="email" name="" id="" />
							</span>{" "}
							and my password is{" "}
							<span>
								<input type="password" name="" id="" />
							</span>.
						</h2>
						<button type="submit" className="button-highlight">
							Login
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}