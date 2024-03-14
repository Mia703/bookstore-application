import Link from "next/link";
import "./mobileStyle.css";

export default function mobileNavigation({isOpen, onClose}) {
	return (
		<nav className={`mobile-navigation ${isOpen ? "open" : ""}`}>
			<div className="menu-container">
				<div className="button-container">
					<button className="close-button button-accent-dark" onClick={onClose}>
						<span class="material-symbols-outlined">close</span>
					</button>
				</div>
				<ul className="mobile-nav-list">
					<li className="mobile-nav-list-item">
						<Link href={"/pages/about"}>About</Link>
					</li>
					<li className="mobile-nav-list-item">
						<Link href={"/pages/login"}>Login</Link>
					</li>
					<li className="mobile-nav-list-item">
						<Link href={"/pages/signup"}>Sign up</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
