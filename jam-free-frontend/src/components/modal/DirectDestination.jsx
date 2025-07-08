import React from 'react'
import { placeList } from '../../data';

const DirectDestination = ({
    destinationInput,
    setDestinationInput,
    selectedCity,
    setSelectedCity,
    setShowDestinationModal,
    setDestinationCoords
}) => {
    // const cityCoordinates = {
    //     Kathmandu: { lat: 27.7172, lng: 85.3240 },
    //     Lalitpur: { lat: 27.6644, lng: 85.3188 },
    //     Bhaktapur: { lat: 27.6710, lng: 85.4298 },
    //     Thimi: { lat: 27.6806, lng: 85.3871 },
    //     Baneshwor: { lat: 27.6949, lng: 85.3367 },
    // };

    const getCoordinates = async (placeName) => {
        //     const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(placeName)}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
        //     try {
        //         const response = await fetch(url);
        //         const data = await response.json();
        //         if (data.status === 'OK') {
        //             const location = data.results[0].geometry.location;
        //             return location;
        //         } else {
        //             console.error('Geocoding failed:', data.status);
        //             return null;
        //         }
        //     } catch (err) {
        //         console.error('Fetch error', err);
        //         return null;
        //     }
    }

    const handleSubmit = () => {
        const destination = destinationInput || selectedCity;
        const place = placeList.find(p => p.name.toLowerCase() === destination.toLowerCase());

        if (place) {
            console.log(destination)
            console.log(place);
            setDestinationCoords({ lat: place.lat, lng: place.lng });
            setShowDestinationModal(false);
        } else {
            alert('Invalid Destination.');
        }

        // const coords = placeList[destionation];
        // console.log(coords);
        // console.log("Destination:", destinationInput || selectedCity);
        // if (coords) {
        //     setDestinationCoords(coords);
        //     setShowDestinationModal(false);
        // } else {
        //     alert('Invalid destination or coordinates not found.');
        // }
    }

    return (
        <div className="absolute top-0 left-0 z-10 h-screen w-screen bg-gray-900/50 flex justify-center items-center">
            <div className="bg-white/70 text-black p-6 m-5 rounded-lg shadow-lg text-center flex flex-col justify-center gap-5 w-full max-w-md">
                <p onClick={() => setShowDestinationModal(false)} className='text-right'>X</p>
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
