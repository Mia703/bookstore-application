import "./globals.css";

export const metadata = {
	title: "PanelSync",
	description: "Tracking your book reading",
	favicon: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
				/>
			</head>
			<body>
				<div id="main-grid">{children}</div>
			</body>
		</html>
	);
}
