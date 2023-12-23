import { useState } from 'react';
import rawFlashcards from './data/flashcards.json';

rawFlashcards.sort((a, b) => a.rank > b.rank ? 1 : -1);

interface IFlashcard {
	name: string,
	rank: number
}

function App() {
	const [flashcards, setFlashcards] = useState<IFlashcard[]>(rawFlashcards);

	const handleRankChange = (flashcard:IFlashcard, e:React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		flashcard.rank = value;
flashcards.sort((a, b) => a.rank > b.rank ? 1 : -1);
		const _flashcards = structuredClone(flashcards);
		setFlashcards(_flashcards);
	}

	return (
		<>
		<h1>Sort Test</h1>
			<p>There are {flashcards.length} flashcards.</p>
			{flashcards.map((flashcard, index) => {
				return (
					<div key={index}>{flashcard.name} - rank: {flashcard.rank} - <input value={flashcard.rank} onChange={(e) => handleRankChange(flashcard, e)}/></div>
				)
			})}
		</>
	)
}

export default App