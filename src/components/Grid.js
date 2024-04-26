import React, {useEffect, useState} from "react";

export default function Grid() {
    const testWordle = 'dream'
    const testGuessOne = 'dream'
    const testGuessTwo = 'other'
    const testGuessThree = 'dryer'
    const testGuessFour = 'fish'

    const [guess, setGuess] = useState(testGuessTwo)
    const [guessWordArray, setGuessWordArray] = useState([])
    const [wordle, setWordle] = useState(testWordle)
    const [wordleArray, setWordleArray] = useState([])
    const [allGuessesArray, setAllGuessesArray] = useState([])

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
            <ul className="flex flex-row mb-2 gap-2">
                {wordleArray.map((letter, index) => (
                    <li key={index} className="border-4 border-gray-200 h-16 w-16 bg-blue-600 rounded-md flex items-center justify-center">
                        {letter}
                    </li>
                ))}
            </ul>
            <ul  className="flex flex-row mb-2 gap-2">
                {guessWordArray.map((letter, index) => (
                    <li key={index} className="flex justify-center items-center">
                        <input onChange={handleLetterGuess} type="text" value={letter} className="border-4 border-gray-200 h-16 w-16 bg-gray-600 rounded-md text-center"/>
                    </li>
                ))}
            </ul>
        </div>
    )
}