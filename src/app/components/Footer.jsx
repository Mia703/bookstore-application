import Link from "next/link";

export default function Footer() {
	const date = new Date().getFullYear();

	const style = {
		display: "flex",
		justifyContent: "space-between",
		fontSize: "0.8em",
		backgroundColor: "var(--accent-dark)",
		color: "var(--background)",
		padding: "2rem 2rem 1rem",
		borderRadius:
			"var(--std-section-border-radius) var(--std-section-border-radius) 0 0",
		linkStyle: {
			color: "var(--background)",
		},
	};

	return (
		<footer style={style}>
			<div className="logo-container">
				<Link href={"/"} style={style.linkStyle}>
					PanelSync
				</Link>
			</div>
			<div className="container">
				<p>&copy;{date}. All rights reserved.</p>
			</div>
		</footer>
	);
}