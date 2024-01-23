
// Services Card(s)

export default function Card({title, body}) {
	const cardStyle = {
		backgroundColor: "var(--primary)",
		padding: "1rem",
		borderRadius: "10px",
		color: "var(--background)",
	};
	return (
		<div className="card" style={cardStyle}>
			<h2>{title}</h2>
			<p>{body}</p>
		</div>
	);
}