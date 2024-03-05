import Link from "next/link";
import "./homeStyle.css"

export default function homeNavigation() {
	return (
		<section className="navigation-section">
			<div className="logo-container">
				<Link href={"/"} className="logo">
					PanelSync
				</Link>
			</div>

			<nav id="home-navigation">
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
