import React from "react";

export default function Grid() {
    return (
        <div className="h-screen flex items-center justify-center text-6xl text-gray-200">
            <ul className="flex flex-row">
                <li className="border-4 border-gray-200 px-4 mx-2 bg-gray-600 rounded-md">D</li>
                <li className="border-4 border-gray-200 px-4 mx-2 bg-gray-600 rounded-md">R</li>
                <li className="border-4 border-gray-200 px-4 mx-2 bg-gray-600 rounded-md">E</li>
                <li className="border-4 border-gray-200 px-4 mx-2 bg-gray-600 rounded-md">A</li>
                <li className="border-4 border-gray-200 px-4 mx-2 bg-gray-600 rounded-md">M</li>
            </ul>
        </div>
    )
}