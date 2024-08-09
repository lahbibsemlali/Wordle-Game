import { useState } from 'react';
import words from "./words.json"
import './App.css';

const WORD_SIZE = 5;
let currentIndex = 0;
const randomIndex = Math.floor(Math.random() * words.length);
const wordToGuess = words[randomIndex];
console.log(wordToGuess)
function App() {
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('')

  return (
    <div className="App">
      <h1 className='title'>Wordle</h1>
      {
        guesses.map(guess => {
          return <Line guess={guess ?? ''}/>
        })
      }
      <input 
        type='text'value={currentGuess} 
        onChange={(e) => {
          setCurrentGuess(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == 'Enter') {
            if (currentGuess.length == 5 && currentGuess.match(/^[a-zA-Z]{5}$/)) {
              let newGuesses = [...guesses];
              newGuesses[currentIndex] = currentGuess;
              setCurrentGuess('');
              setGuesses(newGuesses)
              currentIndex++;
            }
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
