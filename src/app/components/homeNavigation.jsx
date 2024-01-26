import Link from "next/link";

export default function homeNavigation() {
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
		marginRight: "10px",
	};

	return (
		<section className="navigation-section" style={sectionStyle}>
			<div className="logo-container">
				<a href="/">PanelSync</a>
			</div>
			<nav id="home-navigation" style={navStyle}>
				<ul className="nav-list" style={listStyle}>
					<li className="nav-item" style={itemStyle}>
						<Link href={"/"}>Home</Link>
					</li>
					<li className="nav-item" style={itemStyle}>
						<Link href={"/about"}>About</Link>
					</li>
					<li className="nav-item" style={itemStyle}>
						<Link href={"/"}>Sign-up</Link>
					</li>
					<li className="nav-item" style={itemStyle}>
						<Link href={"/"}>Login</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
}