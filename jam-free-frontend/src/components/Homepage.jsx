"use client";
import Image from "next/image";
import React, { useState } from "react";
import DirectDestination from "./modal/DirectDestination";
import TurnOnLocation from "./modal/TurnOnLocation";
import { GoogleMap } from "@react-google-maps/api";
import Map from "./Map";

const Homepage = () => {
  const [locationOff, setLocationOff] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [showDestinationModal, setShowDestinationModal] = useState(false);
  const [destinationInput, setDestinationInput] = useState("");
  const [destinationCoords, setDestinationCoords] = useState("");
  const [selectedCity, setSelectedCity] = useState("Kathmandu");

  return (
    <div className="relative h-screen w-screen">
      <Map className="h-screen w-screen" userLocation={userLocation} destinationCoords={destinationCoords} />

      {locationOff && (
        <TurnOnLocation
          setUserLocation={setUserLocation}
          setLocationOff={setLocationOff}
          setShowDestinationModal={setShowDestinationModal} />
      )}

      {showDestinationModal && (
        <DirectDestination
          destinationInput={destinationInput}
          setDestinationInput={setDestinationInput}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          setDestinationCoords={setDestinationCoords}
          setShowDestinationModal={setShowDestinationModal}
        />

      )}
    </div>
  );
};

export default Homepage;
