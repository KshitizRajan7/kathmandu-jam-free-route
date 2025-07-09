import React from 'react'

const TurnOnLocation = ({setModalOpen, setLocationOff, setShowDestinationModal, setUserLocation }) => {
    const ShowLocationRequest = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
                setLocationOff(false);
                setShowDestinationModal(true);
            },
            (error) => {
                console.error('Error getting location:', error);
            }
        )
        
    }
    return (
        <div className="absolute top-0 left-0 h-screen w-screen bg-gray-900/50 flex justify-center items-center">
            <div className="bg-white/70 text-black p-6 rounded-lg shadow-lg text-center">
                <p className='float-right' onClick={() => {setModalOpen(false); setLocationOff(false)}}>X</p>
                <h1 className="text-2xl font-semibold mb-4">
                    Please allow the browser to turn on your location.
                </h1>
                <button
                    onClick={() => {
                        ShowLocationRequest();
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
