export default async function playersPage({ params}) {
	const { id } = params;
	return (
		<div>
			<h1>spiderweb</h1>
			<h1>{id}</h1>
		</div>
	)
}