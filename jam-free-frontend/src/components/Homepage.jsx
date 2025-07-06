"use client";
import Image from "next/image";
import React, { useState } from "react";
import DirectDestination from "./modal/DirectDestination";
import TurnOnLocation from "./modal/TurnOnLocation";
import { GoogleMap } from "@react-google-maps/api";
import Map from "./Map";

const Homepage = () => {
  const [locationOff, setLocationOff] = useState(true);
  const [showDestinationModal, setShowDestinationModal] = useState(false);
  const [destinationInput, setDestinationInput] = useState("");
  const [selectedCity, setSelectedCity] = useState("Kathmandu");

  return (
    <div className="relative h-screen w-screen">
      <Map className="h-screen w-screen" />

      {/* Location prompt */}
      {locationOff && (
        <TurnOnLocation
          setLocationOff={setLocationOff}
          setShowDestinationModal={setShowDestinationModal} />
      )}

      {/* Destination modal */}
      {showDestinationModal && (
        <DirectDestination
          destinationInput={destinationInput}
          setDestinationInput={setDestinationInput}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          setShowDestinationModal={setShowDestinationModal}
        />

      )}
    </div>
  );
};

export default Homepage;
