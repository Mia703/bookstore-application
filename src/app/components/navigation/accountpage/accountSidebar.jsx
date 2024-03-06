import AccountNav from "./accountNavigation";
import { nameData } from "../../../api/methods";

export default function AccountSidebar() {
	const styles = {
		sidebar: {
			backgroundColor: "var(--accent-light)",
			padding: "var(--std-section-padding)",
			borderRadius: "var(--std-section-border-radius)",
			border: "2px solid var(--font)",
			textAlign: "center",
			minWidth: "min-content",
		},
	};
	
	return (
		<div className="sidebar" style={styles.sidebar}>
			{nameData ? (
				<h1>{nameData[0].first_name}</h1>
			) : (
				<h1></h1>
			)}
			<AccountNav />
		</div>
	);
}
