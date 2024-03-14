"use client";
import { useState } from "react";
import Link from "next/link";
import MobileNavigation from "../mobile/mobileNavigation";
import "./homeStyle.css";

export default function homeNavigation() {
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
				<button type="button" className="button-accent-light" onClick={toggleNav}>
					<span class="material-symbols-outlined">menu</span>
				</button>
				<MobileNavigation isOpen={isNavOpen} onClose={toggleNav} />
			</div>

			<nav id="home-navigation" role="navigation">
				<ul className="nav-list">
					<li className="nav-item">
						<Link href={"/pages/about"}>About</Link>
					</li>
					<li className="nav-item">
						<Link href={"/pages/login"}>Login</Link>
					</li>
					<li className="nav-item">
						<Link href={"/pages/signup"}>
							<button type="button" className="button-accent-light">
								Sign up
							</button>
						</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
}
