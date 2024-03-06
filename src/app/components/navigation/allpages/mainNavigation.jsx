"use client";
import Link from "next/link";
import { auth, userDetails } from "../../../api/methods";
import { signOut } from "firebase/auth";
import "./mainStyle.css";

export default function Navigation() {
	const user = auth.currentUser;
	const {nameData} = userDetails();

	return (
		<section className="navigation-section">
			<div className="logo-container">
				<Link href={"/"} className="logo">
					PanelSync
				</Link>
			</div>

			<nav id="home-navigation">
				<ul className="nav-list">
					<li className="nav-item" style={{ display: "flex" }}>
						{nameData && (
							<p>Hello, <span className="bold">{nameData[0].first_name}</span></p>
						)}
					</li>
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
						<button
							type="button"
							className="button-accent-medium"
							onClick={() => {
								// remove the user from localstorage
								localStorage.removeItem(user.uid)
								signOut(auth)
									.then(() => {
										// Sign-out successful.
										window.location.href = "/pages/login";
									})
									.catch((error) => {
										// An error happened.
										alert("Error: Could not sign out user.\n" + error);
										// reload on search page
										window.location.href = "/pages/search";
									});
							}}
						>
							Log out
						</button>
					</li>
				</ul>
			</nav>
		</section>
	);
}
