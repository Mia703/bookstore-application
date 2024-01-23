
// FQ&A question container

export default function Question({question, answer}) {
	return(
		<div className="question">
			<h2>{question}</h2>
			<p>{answer}</p>
		</div>
	);
}