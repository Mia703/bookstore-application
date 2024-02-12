import Navigation from "../../components/homeNavigation";
import Footer from "../../components/Footer";
import "./styles.css";

// TODO: use Formik

export default function Signup() {
	return (
		<div id="signup-page">
			<Navigation />
			<section className="signup-section">
				<div className="left-container">
					<h1>Sign up to PanelSync</h1>
					<h2>Enter your name, email, and password to create an account.</h2>
					<form action="#">
						<div className="name-container">
							<div>
								<label htmlFor="fname">
									<span aria-label="required">First Name</span>
								</label>
								<input
									type="text"
									name="user-fname"
									id="fname"
									placeholder="Enter your first name"
									maxLength={45}
									required
								/>
							</div>
							<div>
								<label htmlFor="lname">
									<span aria-label="required">Last Name</span>
								</label>
								<input
									type="text"
									name="user-lname"
									id="lname"
									placeholder="Enter your last name"
									maxLength={45}
									required
								/>
							</div>
						</div>
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
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter your password"
							required
						/>
						<button type="submit" className="button-highlight">
							Sign Up
						</button>
					</form>
					<p>
						Already have an account?{" "}
						<a href={"/pages/login"} className="underline">
							Login
						</a>
					</p>
				</div>
				<div className="image-container"></div>
			</section>
			<Footer />
		</div>
	);
}
