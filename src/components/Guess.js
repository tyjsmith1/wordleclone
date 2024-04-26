import React, {useEffect, useState } from "react";

function Guess({ word, guess, isGuessed}) {

    return (
        <div className="grid grid-cols-5 gap-2 mb-2">
            {new Array(5).fill(0).map((_, i) => {
                const bgColor = !isGuessed
                    ? 'bg-black'
                    : guess[i] === word[i]
                    ? 'bg-gradient-to-br from-blue-400 to-green-400'
                    : word.includes(guess[i])
                    ? 'bg-gradient-to-br from-orange-400 to-yellow-400'
                    : 'bg-black'
                return (
                    <div className={`text-xl font-bold rounded-md w-14 h-14 border border-gray-400 text-gray-100 uppercase flex items-center justify-center ${bgColor}`} key={i}>{guess[i]}</div>
                )
            })}
        </div>
    )
}

export default Guess