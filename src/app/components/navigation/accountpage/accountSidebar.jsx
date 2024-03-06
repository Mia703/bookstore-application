import AccountNav from "./accountNavigation";
import { userDetails } from "../../../api/methods";

export default function AccountSidebar() {
	const { nameData } = userDetails();
	const styles = {
		sidebar: {
			backgroundColor: "var(--accent-light)",
			padding: "var(--std-section-padding)",
			borderRadius: "var(--std-section-border-radius)",
			border: "2px solid var(--font)",
			textAlign: "left",
			minWidth: "min-content",
		},
	};
	
	return (
		<div className="sidebar" style={styles.sidebar}>
			{ nameData && (
				<h2>{nameData[0].first_name} {nameData[0].last_name}</h2>
			)}
			<AccountNav />
		</div>
	);
}
