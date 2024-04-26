import React, { useState, useEffect } from 'react';
import Qwerty from './components/Qwerty';
import Guess from './components/Guess'
import wordBank from './wordbank.json'
import './App.css';

function App() {
  const [wordle, setWordle] = useState('')
  const [allGuesses, setAllGuesses] = useState(Array(6).fill(""))
  const [currentGuess, setCurrentGuess] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)

  const [exactGuesses, setExactGuesses] = useState(new Set())
  const [inexactGuesses, setInexactGuesses] = useState(new Set())
  const [nonGuesses, setNonGuesses] = useState(new Set())

  function submitGuess() {
    const currentWord = allGuesses[currentGuess]
    if (currentWord.length === 5 && wordBank.includes(currentWord.toLowerCase())) {
      let newExactGuesses = new Set([...exactGuesses])
      let newInexactGuesses = new Set([...inexactGuesses])
      let newNonGuesses = new Set([...nonGuesses])
      
      currentWord.split('').forEach((letter, index) => {
        if (letter === wordle[index]) {
          newExactGuesses.add(letter)
        } else if (wordle.toUpperCase().includes(letter)) {
          newInexactGuesses.add(letter)
        } else {
          newNonGuesses.add(letter)
        }
      })
      setExactGuesses(newExactGuesses)
      setInexactGuesses(newInexactGuesses)
      setNonGuesses(newNonGuesses)

      if (currentWord.toUpperCase() === wordle.toUpperCase()) {
        setGameWon(true)
        setGameOver(true)
      }

      const newGuessIndex = currentGuess + 1
      setCurrentGuess(newGuessIndex)

      if (newGuessIndex >= 6) {
        setGameOver(true)
      }
    }
  }

  function handleKeyPress(e) {
    const key = typeof e === 'string' ? e : e.key
    if (!gameOver) {
      const currentWord = allGuesses[currentGuess]
      if (key === 'Enter') {
        submitGuess()
      } else if (key === 'Backspace') {
        const updatedWord = currentWord.slice(0,-1)
        setAllGuesses(prevGuesses => 
          prevGuesses.map((guess, index) => index === currentGuess ? updatedWord : guess)
        )
      } else if (currentWord.length < 5 && key.match(/^[a-zA-Z]$/)) {
        const updatedWord = currentWord + key.toUpperCase()
        setAllGuesses(prevGuesses => 
          prevGuesses.map((guess, index) => index === currentGuess ? updatedWord : guess)  
        )
      }
    }
  }
  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * wordBank.length)
    setWordle(wordBank[randomIndex].toUpperCase())
  },[])

  useEffect(() => {
    const handleKeyPressBound = (e) => handleKeyPress(e)
    window.addEventListener('keyup', handleKeyPressBound)

    return () => {
      window.removeEventListener('keyup', handleKeyPressBound)
    }
  },[currentGuess, allGuesses, handleKeyPress])

  return (
    <div className='flex flex-col bg-gray-600 w-screen h-screen items-center justify-between'>
      <h1 className='text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400 mt-10'>💩 Turdle 💩</h1>
      <div className='flex flex-col grow items-center justify-center'>
        {allGuesses.map((guess,i) => (
          <Guess key={i} word={wordle} guess={guess} isGuessed={i < currentGuess}/>
        ))}
      </div>
      {gameOver ? (
          <div className='text-center mb-10'>
            <div className='text-4xl font-bold'>{gameWon ? "You Won!" : "You Lost!"}</div>
            <button onClick={() => window.location.reload()} className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>Play Again</button>
          </div>
        ) : (
          <div className='mb-10'>
            <Qwerty onKeyPress={handleKeyPress} exactGuesses={exactGuesses} inexactGuesses={inexactGuesses} nonGuesses={nonGuesses}/>
          </div>
      )}
    </div>
  );
}

export default App;