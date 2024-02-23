import AccountNav from "./accountNavigation";

export default function AccountSidebar() {

	const styles = {
		sidebar: {
			backgroundColor: 'var(--accent-light)',
			padding: 'var(--std-section-padding)',
			borderRadius: 'var(--std-section-border-radius)',
			border: '2px solid var(--font)',
		},
		imageContainer: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			marginBottom: '1rem',
		},
		container: {
			backgroundColor: 'grey',
			width: '10rem',
			height: '10rem',
			borderRadius: '1000px',
			marginBottom: '1rem',
		}
	}
	
	return (
		<div className="sidebar" style={styles.sidebar}>
			<div className="image-container" style={styles.imageContainer}>
				<div className="container" style={styles.container}>
					<img src="" alt="[User's name]" />
				</div>
				<h1>[Name]</h1>
			</div>
			<AccountNav />
		</div>
	);
}
