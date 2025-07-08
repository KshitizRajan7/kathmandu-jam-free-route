import { placeList } from "@/data";
import React, { useState } from "react";

const SelectRouteModal = ({ onClose, setSelectedSourceCoords, setSelectedDestinationCoords }) => {
  const [initialPoint, setInitialPoint] = useState("");
  const [finalPoint, setFinalPoint] = useState("");

  const handleSearch = () => {
    if (!initialPoint || !finalPoint) {
      alert("Please select both initial and final points.");
      return;
    }
    let source = placeList.find(p => p.name.toLowerCase() === initialPoint.toLowerCase());
    if (source) {
      setSelectedSourceCoords({ lat: source.lat, lng: source.lng });
    }
    let destination = placeList.find(p => p.name.toLowerCase() === finalPoint.toLowerCase());
    if (destination) {
      setSelectedDestinationCoords({ lat: destination.lat, lng: destination.lng });
    }
    onClose();
  };

  return (
    <div className="bg-white/70 text-black p-6 m-2 rounded-lg shadow-lg text-center flex flex-col justify-center gap-5 w-full max-w-md">
      <p onClick={onClose} className="text-right">X</p>
      <h1 className="text-xl font-semibold mb-4">
        Please Select your Route
      </h1>

      {/* Initial Point Input */}
      <label className="text-left font-semibold">Initial Point</label>
      <input
        type="text"
        placeholder="Search initial point..."
        value={initialPoint}
        onChange={(e) => setInitialPoint(e.target.value)}
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

      {/* Or dropdown to select from cities */}
      {/* <select
        className="w-full p-2 mb-4 border rounded"
        value={initialPoint}
        onChange={(e) => setInitialPoint(e.target.value)}
      >
        <option value="">-- Select Initial Point --</option>
        {cities.map((city) => (
          <option key={"initial-" + city} value={city}>
            {city}
          </option>
        ))}
      </select> */}

      {/* Final Point Input */}
      <label className="text-left font-semibold">Final Point</label>
      <input
        type="text"
        placeholder="Search final point..."
        value={finalPoint}
        onChange={(e) => setFinalPoint(e.target.value)}
        className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        list="places"
      />
      <datalist>
        {placeList.map((place, idx) => (
          <option key={idx}>{place.name}</option>
        ))}
      </datalist>
      {/* 
      <select
        className="w-full p-2 mb-4 border rounded"
        value={finalPoint}
        onChange={(e) => setFinalPoint(e.target.value)}
      >
        <option value="">-- Select Final Point --</option>
        {cities.map((city) => (
          <option key={"final-" + city} value={city}>
            {city}
          </option>
        ))}
      </select> */}

      <button
        onClick={handleSearch}
        className="px-6 py-2 bg-green-600 text-white font-bold rounded hover:bg-blue-700"
      >
        Search Route
      </button>
    </div>

  );
};

export default SelectRouteModal;
