"use client"
import { placeList } from '@/data'
import React, { useEffect, useState } from 'react'
import { trafficSegments } from '@/data'

const TrafficStatus = ({ onClose }) => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [showStatus, setShowStatus] = useState(null);

    useEffect(() => {
        if (selectedLocation) {
            const trafficStatus = trafficSegments.find((segment) => segment.location.toLowerCase() === selectedLocation.toLowerCase())
            setShowStatus(trafficStatus || null);
        } else {
            setShowStatus(null);
        }
    }, [selectedLocation])
    return (
        <div className="bg-white/70 text-black p-6 m-2 rounded-lg shadow-lg text-center flex flex-col justify-center gap-5 w-full max-w-md">
            <p onClick={onClose} className="text-right">X</p>
            <h1 className="text-xl font-semibold mb-4">
                Please Select the location.            </h1>

            {/* Initial Point Input */}
            <label className="text-left font-semibold">Location</label>
            <input
                type="text"
                placeholder="Search initial point..."
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
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
            {showStatus ? (
                <div className="text-left bg-white/80 rounded p-4 border border-gray-300">
                    <p><strong>Location:</strong> {showStatus.location}</p>
                    <p><strong>Current Speed:</strong> {showStatus.currentSpeed} km/h</p>
                    <p><strong>Free Flow Speed:</strong> {showStatus.freeFlowSpeed} km/h</p>
                    <p><strong>Congestion Level:</strong> <span style={{ color: showStatus.trafficColor }}>{showStatus.congestionLevel}</span></p>
                    <p><strong>Last Updated:</strong> {new Date(showStatus.timestamp).toLocaleString()}</p>
                </div>
            ) : (
                selectedLocation && <p>No traffic data found for "{selectedLocation}".</p>
            )}
        </div>


    )
}

export default TrafficStatus
