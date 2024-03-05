import AccountNav from "./accountNavigation";

export default function AccountSidebar() {

	const styles = {
		sidebar: {
			backgroundColor: 'var(--accent-light)',
			padding: 'var(--std-section-padding)',
			borderRadius: 'var(--std-section-border-radius)',
			border: '2px solid var(--font)',
			textAlign: "center",
			minWidth: "min-content",
		}
	}
	
	return (
		<div className="sidebar" style={styles.sidebar}>
			<h1>[name]</h1>
			<AccountNav />
		</div>
	);
}
