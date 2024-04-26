import React, {useEffect, useState} from "react";
import wordBank from '../wordbank.json'

export default function Grid() {
    const testWordle = 'dream'
    const testGuessOne = 'dream'
    const testGuessTwo = 'other'
    const testGuessThree = 'dryer'
    const testGuessFour = 'fish'

    const [guess, setGuess] = useState("")
    const [guessWordArray, setGuessWordArray] = useState([])
    const [wordle, setWordle] = useState("")
    const [wordleArray, setWordleArray] = useState([])
    const [allGuessesArray, setAllGuessesArray] = useState([Array(6).fill("")])

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * wordBank.length)
        setWordle(wordBank[randomIndex].toUpperCase())
    }, [])

    console.log(wordle)

    useEffect(() => {
        setGuessWordArray(guess.toUpperCase().split(''))
    }, [guess])

    useEffect(() => {
        setWordleArray(wordle.toUpperCase().split(''))
    }, [wordle])

    function handleLetterGuess(e) {
        setGuess(e.target.value)
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center text-5xl text-gray-200">
            <ul  className="flex flex-row mb-2 gap-2">
                {guessWordArray.map((letter, index) => (
                    <li key={index} className="flex justify-center items-center">
                        <input onChange={handleLetterGuess} type="text" value={letter} className="border-4 border-gray-200 h-16 w-16 bg-gray-600 rounded-md text-center"/>
                    </li>
                ))}
            </ul>
            <h1>{wordle}</h1>
        </div>
    )
}