"use client";
import Link from "next/link";
import { auth, nameData } from "../../../api/methods";
import { signOut } from "firebase/auth";
import "./mainStyle.css";

export default function Navigation() {
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
						{nameData ? (
							<p>Hello, {nameData[0].first_name}</p>
						) : (
							<p></p>
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
								signOut(auth)
									.then(() => {
										// Sign-out successful.
										// console.log(
										// 	"Sign out successful. Redirecting to login page."
										// );
										window.location.href = "/pages/login";
									})
									.catch((error) => {
										// An error happened.
										alert("Error: Could not sign out user.\n" + error);
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
