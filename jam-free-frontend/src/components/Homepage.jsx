"use client";
import Image from "next/image";
import React, { useState } from "react";
import DirectDestination from "./modal/DirectDestination";
import TurnOnLocation from "./modal/TurnOnLocation";

const Homepage = () => {
  const [locationOff, setLocationOff] = useState(true);
  const [showDestinationModal, setShowDestinationModal] = useState(false);
  const [destinationInput, setDestinationInput] = useState("");
  const [selectedCity, setSelectedCity] = useState("Kathmandu");

  return (
    <div className="relative h-screen w-screen">
      <Image
        src="/map.png"
        alt="Image of map"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

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
