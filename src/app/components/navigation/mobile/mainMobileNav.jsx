import Link from "next/link";
import "./mobileStyle.css";

export default function mobileNavigation({ isOpen, onClose }) {
	return (
		<nav className={`mobile-navigation ${isOpen ? "open" : ""}`}>
			<div className="menu-container">
				<div className="button-container">
					<button className="close-button button-accent-dark" onClick={onClose}>
						<span class="material-symbols-outlined">close</span>
					</button>
				</div>
				<ul className="mobile-nav-list">
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
						<Link href={"/pages/login"}>Log out </Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
