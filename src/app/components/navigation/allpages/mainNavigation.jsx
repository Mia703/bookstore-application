"use client";
import Link from "next/link";
import { useState } from "react";
import { auth, userDetails } from "../../../api/methods";
import { signOut } from "firebase/auth";
import MobileNavigation from "../mobile/mainMobileNav";
import "./mainStyle.css";

export default function Navigation() {
	const user = auth.currentUser;
	const {nameData} = userDetails();

	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<section className="navigation-section">
			<div className="logo-container">
				<Link href={"/"} className="logo">
					PanelSync
				</Link>
			</div>

			<div className="mobile">
				<button
					type="button"
					className="button-accent-light"
					onClick={toggleNav}
				>
					<span class="material-symbols-outlined">menu</span>
				</button>
				<MobileNavigation isOpen={isNavOpen} onClose={toggleNav} />
			</div>

			<nav id="home-navigation">
				<ul className="nav-list">
					<li className="nav-item" style={{ display: "flex" }}>
						{nameData && (
							<p>
								Hello, <span className="bold">{nameData[0].first_name}</span>
							</p>
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
