// Services Card(s)

export default function Card ({ title = "", body = "" }) {
	const style = {
		card: {
			backgroundColor: "var(--background)",
			padding: "2rem",
			borderRadius: "1rem",
			border: "solid 2px var(--font)",
			transition: "box-shadow var(--std-transition)",
		},
	};

	return (
		<div className="card" style={style.card}>
			<h2>{title}</h2>
			<p>{body}</p>
		</div>
	);
}
