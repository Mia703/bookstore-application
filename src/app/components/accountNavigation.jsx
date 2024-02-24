import Link from "next/link";

export default function AccountNavigation() {

	const styles = {
		navList: {
			display: "grid",
			gap: "10px",
			textAlign: "center",
			marginTop: "1rem",
		},
		listItem: {
			listStyle: "none",
		},
		listItemA: {
			transition: "border-bottom var(--std-transition)",
		},
	};
	
	return (
		<ul className="account-nav-list" style={styles.navList}>
			<li className="account-list-item" style={styles.listItem}>
				<Link
					href={"/pages/my-account"}
					className="account-link"
					style={styles.listItemA}
				>
					Reading Insights
				</Link>
			</li>
			<li className="account-list-item" style={styles.listItem}>
				<Link
					href={"/pages/my-account/personal-info"}
					className="account-link"
					style={styles.listItemA}
				>
					Personal Info
				</Link>
			</li>
			<li className="account-list-item" style={styles.listItem}>
				<Link
					href={"/pages/my-account/account-settings"}
					className="account-link"
					style={styles.listItemA}
				>
					Account Settings
				</Link>
			</li>
			<li className="account-list-item" style={styles.listItem}>
				<Link
					href={"/pages/login"}
					className="account-link"
					style={styles.listItemA}
				>
					Log Out
				</Link>
			</li>
		</ul>
	);
}
