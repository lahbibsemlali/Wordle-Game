import { useState } from 'react';
import words from "./words.json"
import './App.css';

const WORD_SIZE = 5;
let currentIndex = 0;
const currentGuess = "";
const randomIndex = Math.floor(Math.random() * words.length);
const wordToGuess = words[randomIndex];
console.log(wordToGuess)
function App() {
  const [guesses, setGuesses] = useState(Array(6).fill(null));

  return (
    <div className="App">
      <h1 className='title'>Wordle</h1>
      {
        guesses.map(guess => {
          return <Line guess={guess ?? ''}/>
        })
      }
      <input onKeyDown={(e) => {
          if (e.key == 'Enter') {
            let newGuesses = [...guesses];
            newGuesses[currentIndex] = 'hello';
            setGuesses(newGuesses)
            currentIndex++;
          }
        }}></input>
    </div>
  );
}

function Line({ guess }) {
  let char = ''
  let boxes = []
  for (let i = 0; i < WORD_SIZE; i++) {
    char = <div className='box'>{guess[i]}</div>;
    boxes.push(char);
  }

  return <div className='line'>{boxes}</div>
}

export default App;
