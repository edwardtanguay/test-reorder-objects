import softwares from './data/softwares.json';

function App() {

	return (
		<>
		<h1>Sort Test</h1>
			<p>There are {softwares.length} softwares.</p>
			{softwares.map((software, index) => {
				return (
					<div key={index}>{software.name}</div>
				)
			})}
		</>
	)
}

export default App