import Link from "next/link";

export default function accountNavigation() {
	const sectionStyle = {
		padding: "1rem",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	};

	const navStyle = {
		minWidth: "20vw",
	};

	const listStyle = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	};

	const itemStyle = {
		listStyle: "none",
		marginRight: "20px",
	};

	return (
		<section className="navigation-section" style={sectionStyle}>
			<div className="logo-container">
				<a href="/">PanelSync</a>
			</div>
			<nav id="home-navigation" style={navStyle}>
				<ul className="nav-list" style={listStyle}>
					<li className="nav-item" style={itemStyle}>
						Hi, Name
					</li>
					<li className="nav-item" style={itemStyle}>
						<Link href={"/pages/search"}>Search</Link>
					</li>
					<li className="nav-item" style={itemStyle}>
						<Link href={"#"}>My Library</Link>
					</li>
					<li className="nav-item" style={itemStyle}>
						<Link href={"#"}>My Account</Link>
					</li>
					<li className="nav-item" style={itemStyle}>
						<Link href={"/pages/login"}>Sign Out</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
}
