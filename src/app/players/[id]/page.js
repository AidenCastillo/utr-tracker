import * as utr from 'utrjs';

async function getPlayerData(id) {
	const data = await utr.getResults(id);
	const results = utr.convertToScore(data);
	return results;
}


export default async function playersPage({ params }) {
	console.log(params.id);
	const games = await getPlayerData(params.id);
	return (
		<div>
			{games.map((game) => {
				return <Game key={game.id} game={game}/>
			})}
		</div>
	);
}

function Game({game}) {
	const {name, id } = game
	const results = JSON.stringify(game.results);
	return (
		<div>
			<h1>{name}</h1>
			<h1>{id}</h1>
		</div>
	)
}