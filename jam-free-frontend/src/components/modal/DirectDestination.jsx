import React from 'react'
import { placeList } from '../../data';

const DirectDestination = ({
    destinationInput,
    setDestinationInput,
    selectedCity,
    setSelectedCity,
    setShowDestinationModal,
    setDestinationCoords,
    setModalOpen
}) => {

    const handleSubmit = () => {
        const destination = destinationInput || selectedCity;
        const place = placeList.find(p => p.name.toLowerCase() === destination.toLowerCase());

        if (place) {
            console.log(destination)
            console.log(place);
            setDestinationCoords({ lat: place.lat, lng: place.lng });
            setShowDestinationModal(false);
            setModalOpen(false);
        } else {
            alert('Invalid Destination.');
        }
    }
    return (
        <div className="absolute top-0 left-0 h-screen w-screen bg-gray-900/50 flex justify-center items-center">
            <div className="bg-white/70 text-black p-6 m-5 rounded-lg shadow-lg text-center flex flex-col justify-center gap-5 w-full max-w-md">
                <p onClick={() => { setShowDestinationModal(false); setModalOpen(false) }} className='text-right'>X</p>
                <h1 className="text-xl font-semibold mb-4">
                    Please Select your Destination.
                </h1>
                <input
                    type="text"
                    list='places'
                    value={destinationInput}
                    onChange={(e) => setDestinationInput(e.target.value)}
                    placeholder="Search..."
                    className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <datalist id='places'>
                    {placeList.map((place, idx) => (
                        <option key={idx} value={place.name} />
                    ))}
                </datalist>
                {/* <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option>Kathmandu</option>
                    <option>Lalitpur</option>
                    <option>Bhaktapur</option>
                    <option>Thimi</option>
                    <option>Baneshwor</option>
                </select> */}

                <button
                    onClick={() => {
                        handleSubmit()
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
