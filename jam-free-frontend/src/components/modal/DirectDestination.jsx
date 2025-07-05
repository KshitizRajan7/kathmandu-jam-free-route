import React from 'react'

const DirectDestination = ({
    destinationInput,
    setDestinationInput,
    selectedCity,
    setSelectedCity,
    setShowDestinationModal
}) => {
    return (
        <div className="absolute top-0 left-0 z-10 h-screen w-screen bg-gray-900/50 flex justify-center items-center">
            <div className="bg-white/70 text-black p-6 m-5 rounded-lg shadow-lg text-center flex flex-col justify-center gap-5 w-full max-w-md">
                <p onClick={()=>setShowDestinationModal(false)} className='text-right'>X</p>
                <h1 className="text-xl font-semibold mb-4">
                    Please Select your Destination.
                </h1>
                <input
                    type="text"
                    value={destinationInput}
                    onChange={(e) => setDestinationInput(e.target.value)}
                    placeholder="Search..."
                    className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option>Kathmandu</option>
                    <option>Lalitpur</option>
                    <option>Bhaktapur</option>
                    <option>Pokhara</option>
                    <option>Butwal</option>
                </select>

                <button
                    onClick={() => {
                        setShowDestinationModal(false);
                        console.log("Destination:", destinationInput || selectedCity);
                    }}
                    className="px-6 py-2 bg-green-600 text-white font-bold rounded hover:bg-blue-700"
                >
                    Search Route
                </button>
            </div>
        </div>
    )
}

export default DirectDestination
