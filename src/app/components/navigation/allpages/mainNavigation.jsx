import Link from "next/link";
import app from "../../../api/firebase"
import { getAuth, signOut } from "firebase/auth";
import "./mainStyle.css";

export default function Navigation () {
	const signoutUser = () => {
		const auth = getAuth(app);
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				alert("Sign out was successful. Redirecting to login page.");
				window.location.href="/pages/login"
			})
			.catch((error) => {
				// An error happened.
				alert("Error: Could not sign out user.\n" + error);
			});
	}

	return (
		<section className="navigation-section">
			<div className="logo-container">
				<Link href={"/"} className="logo">
					PanelSync
				</Link>
			</div>

			<nav id="home-navigation">
				<ul className="nav-list">
					<li className="nav-item">Hi, [Name]</li>
					<li className="nav-item">
						<Link href={"/pages/search"}>Search</Link>
					</li>
					<li className="nav-item">
						<Link href={"/pages/my-library"}>My Library</Link>
					</li>
					<li className="nav-item">
						<Link href={"/pages/my-account"}>My Account</Link>
					</li>
					<li className="nav-item">
						{/* <Link onClick={signoutUser}>Log out</Link> */}
						<button type="button" onClick={signoutUser}>Log out</button>
					</li>
				</ul>
			</nav>
		</section>
	);
}