import Navigation from "../components/homeNavigation";
import "../globals.css";

export const metadata = {
	title: "PanelSync",
	description: "Tracking your manwha reading",
	favicon: "",
};

export default function PageLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body>
				<Navigation />
				<div id="main-grid">{children}</div>
			</body>
		</html>
	);
}
