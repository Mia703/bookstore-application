import Link from "next/link";
import "./style.css"

export default function Logged() {
	return (
		<div className="not-logged-div">
			<div className="container">
				<h1>Uh oh! You're not logged in.</h1>
				<h2>Please return to the login page to access your account.</h2>
				<Link href={"/pages/login"}>
					<button type="button" className="button-highlight">
						Return to Login Page
					</button>
				</Link>
			</div>
		</div>
	);
}