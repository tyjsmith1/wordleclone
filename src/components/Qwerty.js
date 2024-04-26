import React from "react";
import { BsBackspaceFill } from "react-icons/bs";

function Qwerty({ exactGuesses, inexactGuesses, nonGuesses, onKeyPress }) {
    const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

    return (
        <div>
            {qwerty.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                    {rowIndex === 2 && (
                        <div className="bg-gray-200 m-1 flex w-14 h-12 rounded-md justify-center items-center uppercase font-bold"
                            onClick={() => onKeyPress('Enter')}>Enter</div>
                    )}
                    {row.split('').map((key, keyIndex) => {
                        const bgColor = exactGuesses.has(key.toUpperCase())
                            ? 'bg-gradient-to-br from-blue-400 to-green-400'
                            : inexactGuesses.has(key.toUpperCase())
                            ? 'bg-gradient-to-br from-orange-400 to-yellow-400'
                            : nonGuesses.has(key.toUpperCase())
                            ? 'bg-gray-400'
                            : 'bg-gray-200'
                        return (
                            <div 
                                key={keyIndex}
                                className={`${bgColor} font-bold m-1 flex w-7 h-12 rounded-md justify-center items-center uppercase cursor-pointer`}
                                onClick={()=> onKeyPress(key)}>{key}</div>
                        )
                    })}

                    {rowIndex === 2 && (
                        <div className="bg-gray-200 m-1 flex w-14 h-12 rounded-md justify-center items-center uppercase"
                        onClick={()=> onKeyPress('Backspace')}><BsBackspaceFill size={25}/></div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Qwerty