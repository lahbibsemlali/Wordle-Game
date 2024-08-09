import { useState } from 'react';
import words from "./words.json"
import Modal from 'react-modal';
import './App.css';
import HowToPlay from './HowToPlay';

Modal.setAppElement('#root');

const WORD_SIZE = 5;
let currentIndex = 0;
const randomIndex = Math.floor(Math.random() * words.length);
let wordToGuess = words[randomIndex].toUpperCase();
console.log(wordToGuess)
function App() {
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('')
  const [isGuessed, setIsGuessed] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)

  const resetGame = () => {
    currentIndex = 0;
    setIsGameOver(false);
    setIsGuessed(false);
    setGuesses(Array(6).fill(null));
    wordToGuess = words[randomIndex].toUpperCase();
  };

  return (
    <div className="App">
      <h1 className='title'>Wordle</h1>
      {
        guesses.map(guess => {
          return <Line guess={guess ?? ''}/>
        })
      }
      <form onSubmit={(e) => {
        e.preventDefault();
        if (currentGuess.length === 5) {
          let newGuesses = [...guesses];
          newGuesses[currentIndex] = currentGuess.toUpperCase();
          setCurrentGuess('');
          setGuesses(newGuesses)
          currentIndex++;
        }
      }}>
        <input 
          className='input'
          type='text'value={currentGuess} 
          onChange={(e) => {
            const guess = e.target.value;
            if (guess.length < 6 && guess.match(/^[a-zA-Z]*$/))
              setCurrentGuess(e.target.value.toUpperCase());
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (currentGuess.length === 5) {
                console.log(currentGuess, '-+-+-', wordToGuess)
                if (currentGuess === wordToGuess) {
                  setIsGameOver(true);
                  setIsGuessed(true);
                }
                else if (currentIndex === 5)
                  setIsGameOver(true);
                let newGuesses = [...guesses];
                newGuesses[currentIndex] = currentGuess.toUpperCase();
                setCurrentGuess('');
                setGuesses(newGuesses)
                currentIndex++;
              }
            }
          }} 
        />
        <button type="submit" className='guess-button'>👍</button>
      </form>
      <Modal
        isOpen={isGameOver}
        onRequestClose={resetGame}
        contentLabel="Game Over Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h2>{isGuessed ? 'Congratulations!' : 'Game Over'}</h2>
        <p>{isGuessed ? 'You guessed the word!' : `Better luck next time! The word was "${wordToGuess}".`}</p>
        <button onClick={resetGame} className='play-again-button'>Play Again</button>
      </Modal>
      <HowToPlay />
    </div>
  );
}

function Line({ guess }) {
  let char = ''
  let boxes = []
  let className = 'tile';
  for (let i = 0; i < WORD_SIZE; i++) {
    console.log(guess, '---', wordToGuess)
    if (guess && wordToGuess[i] === guess[i])
      className += ' correct';
    else if (guess && wordToGuess.includes(guess[i]))
      className += ' close';
    else if (guess)
      className += ' incorrect';
    char = <div className={className}>{guess[i]}</div>;
    className = 'tile';
    boxes.push(char);
  }

  return <div className='line'>{boxes}</div>
}

export default App;
