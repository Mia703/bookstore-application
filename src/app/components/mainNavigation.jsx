import Link from "next/link";
import "./mainStyle.css";

export default function Navigation () {
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
						<Link href={"#"}>My Library</Link>
					</li>
					<li className="nav-item">
						<Link href={"#"}>My Account</Link>
					</li>
					<li className="nav-item">
						<Link href={"#"}>Sign out</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
}