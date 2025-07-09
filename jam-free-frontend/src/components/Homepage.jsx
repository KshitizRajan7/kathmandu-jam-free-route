"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DirectDestination from "./modal/DirectDestination";
import TurnOnLocation from "./modal/TurnOnLocation";
import { GoogleMap } from "@react-google-maps/api";
import Map from "./Map";

const Homepage = ({ setModalOpen, setResetMap, resetMap, selectedSourceCoords, selectedDestinationCoords }) => {
  const [locationOff, setLocationOff] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [showDestinationModal, setShowDestinationModal] = useState(false);
  const [destinationInput, setDestinationInput] = useState("");
  const [sourceCoords, setSourceCoords] = useState("");
  const [destinationCoords, setDestinationCoords] = useState("");
  const [selectedCity, setSelectedCity] = useState("Kathmandu");

  useEffect(() => {
    setModalOpen(locationOff || showDestinationModal);
  }, [])

  useEffect(() => {
    if (resetMap) {
      setDestinationCoords(null);
      setResetMap(false);
    }
  }, [resetMap]);

  return (
    <div className="relative h-screen w-screen">
      <Map className="h-screen w-screen" resetMap={resetMap} userLocation={userLocation} destinationCoords={destinationCoords} selectedSourceCoords={selectedSourceCoords} selectedDestinationCoords={selectedDestinationCoords} />

      {locationOff && (
        <TurnOnLocation
          setUserLocation={setUserLocation}
          setLocationOff={setLocationOff}
          setShowDestinationModal={setShowDestinationModal}
          setModalOpen={setModalOpen} />
      )}

      {showDestinationModal && (
        <DirectDestination
          destinationInput={destinationInput}
          setDestinationInput={setDestinationInput}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          setDestinationCoords={setDestinationCoords}
          setShowDestinationModal={setShowDestinationModal}
          setModalOpen={setModalOpen}
        />

      )}
    </div>
  );
};

export default Homepage;
