import softwares from './data/softwares.json';

softwares.sort((a, b) => a.rank > b.rank ? 1 : -1);

function App() {

	return (
		<>
		<h1>Sort Test</h1>
			<p>There are {softwares.length} softwares.</p>
			{softwares.map((software, index) => {
				return (
					<div key={index}>{software.name} - rank: {software.rank}</div>
				)
			})}
		</>
	)
}

export default App