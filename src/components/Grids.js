import React, { useEffect, useState } from "react";
import wordBank from '../wordbank.json';

export default function Grid() {
    const [currentGuess, setCurrentGuess] = useState("");
    const [wordle, setWordle] = useState("");
    const [allGuesses, setAllGuesses] = useState(Array(6).fill(""));

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * wordBank.length);
        setWordle(wordBank[randomIndex].toUpperCase());
    }, []);

    function handleInputChange(e) {
        const input = e.target.value.toUpperCase();
        if (input.length <= 5) {
            setCurrentGuess(input);
        }
    }

    function handleSubmitGuess() {
        if (currentGuess.length === 5) {
            setAllGuesses(prev => {
                const newGuesses = [...prev];
                const emptyIndex = newGuesses.findIndex(g => g === "");
                if (emptyIndex !== -1) {
                    newGuesses[emptyIndex] = currentGuess;
                }
                return newGuesses;
            });
            setCurrentGuess("");
        }
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center text-5xl text-gray-200">
            {allGuesses.map((guess, index) => (
                <div key={index} className="flex flex-row gap-2 mb-2">
                    {guess.split('').map((letter, idx) => (
                        <div key={idx} className="border-4 border-gray-200 h-16 w-16 bg-gray-600 rounded-md flex justify-center items-center">
                            {letter}
                        </div>
                    ))}
                    {guess === "" && Array(5).fill("").map((_, idx) => (
                        <div key={idx} className="border-4 border-gray-200 h-16 w-16 bg-gray-600 rounded-md flex justify-center items-center"></div>
                    ))}
                </div>
            ))}
            <input
                type="text"
                value={currentGuess}
                onChange={handleInputChange}
                className="text-center"
                maxLength={5}
            />
            <button onClick={handleSubmitGuess}>Submit</button>
            <h1>{wordle}</h1>
        </div>
    );
}
