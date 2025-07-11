"use client"
import { placeList } from '@/data'
import React, { useEffect, useState } from 'react'
import { trafficSegments } from '@/data'

const AlternateRoute = ({ onClose }) => {
    const [initialPoint, setInitialPoint] = useState("");
    const [finalPoint, setFinalPoint] = useState("");

    return (
        <div className="bg-white/70 text-black p-6 m-2 rounded-lg shadow-lg text-center flex flex-col justify-center gap-5 w-full max-w-md">
            <p onClick={onClose} className="text-right">X</p>
            <h1 className="text-xl font-semibold">
                Alternate Route</h1>
            <h1 className="text-xl font-semibold mb-4">
                Please Select the route</h1>
            {/* 
            {/* Initial Point Input */}
            <label className="text-left font-semibold">Initial Point</label>
            <input
                type="text"
                placeholder="Search initial point..."
                // value={initialPoint}
                // onChange={(e) => setInitialPoint(e.target.value)}
                className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                list="places"
            />
            <datalist id="places">
                {
                    placeList.map((place, idx) => (
                        <option key={idx}>{place.name}</option>
                    ))
                }
            </datalist>

            {/* Final Point Input */}
            <label className="text-left font-semibold">Final Point</label>
            <input
                type="text"
                placeholder="Search final point..."
                // value={finalPoint}
                // onChange={(e) => setFinalPoint(e.target.value)}
                className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                list="places"
            />
            <datalist>
                {placeList.map((place, idx) => (
                    <option key={idx}>{place.name}</option>
                ))}
            </datalist>

            <button
                // onClick={handleSearch}
                className="px-6 py-2 bg-green-600 text-white font-bold rounded hover:bg-blue-700"
            >
                Search Route
            </button>
        </div>
    )
}

export default AlternateRoute
