import React from 'react'

const TurnOnLocation = ({ setLocationOff, setShowDestinationModal }) => {
    return (
        <div className="absolute top-0 left-0 z-10 h-screen w-screen bg-gray-900/50 flex justify-center items-center">
            <div className="bg-white/70 text-black p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-semibold mb-4">
                    Please turn on your location.
                </h1>
                <button
                    onClick={() => {
                        setLocationOff(false);
                        setShowDestinationModal(true);
                    }}
                    className="px-6 py-2 bg-green-600 text-white font-bold rounded hover:bg-blue-700"
                >
                    Turn On
                </button>
            </div>
        </div>
    )
}

export default TurnOnLocation
