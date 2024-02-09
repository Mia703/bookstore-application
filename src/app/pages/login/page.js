import Navigation from "../../components/homeNavigation";
import Footer from "../../components/Footer";
import "./styles.css";

// TODO: use Formik for form validation
// https://formik.org/docs/tutorial

export default function Login() {
	return (
		<div id="login-page">
			<Navigation />
			<section className="login-section">
				<div className="left-container">
					<h1>Login to PanelSync</h1>
					<h2>Enter your email and password to access your account.</h2>
					<form action="#">
						<label htmlFor="email">
							<span aria-label="required">Email</span>
						</label>
						<input
							type="email"
							name="user-email"
							id="email"
							placeholder="Enter your email"
							required
						/>
						<label htmlFor="password" className="space">
							<span aria-label="required">Password</span>
							<a href="#" className="underline">
								Forgot?
							</a>
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter your password"
							required
						/>
						<button type="submit" className="button-highlight">
							Login
						</button>
					</form>
					<p>
						Don't have an account?{" "}
						<a href={"/pages/signup"} className="underline">
							Sign up
						</a>
					</p>
				</div>
				<div className="image-container"></div>
			</section>
			<Footer />
		</div>
	);
}
