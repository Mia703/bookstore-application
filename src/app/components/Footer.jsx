import Link from "next/link";

export default function Footer() {
	return (
		<footer>
			<Link href={"/"}>PanelSync</Link>
			<div className="pages-container">
				<Link href={"/pages/about"}>About</Link>
			</div>
		</footer>
	);
}