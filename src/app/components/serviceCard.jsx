
// Services Card(s)

export default function serviceCard({title, body}) {
	const cardStyle = {
		backgroundColor: "var(--accent-medium)",
		padding: "1rem",
		borderRadius: "var(--primary-border-radius)",
		border: "var(--primary-border)",
		transition: "var(--primary-transition)",
	};

	return (
		<div className="card" style={cardStyle}>
			<h2>{title}</h2>
			<p>{body}</p>
		</div>
	);
}