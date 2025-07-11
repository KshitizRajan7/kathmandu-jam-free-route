"use client"
import Homepage from "@/components/Homepage";
import Menu from "@/components/Menu";
import TrafficNotification from "@/components/modal/TrafficNotification";
import { useEffect, useState } from "react";

export default function Home() {
  const [resetMap, setResetMap] = useState(false);
  const [openTrafficNotifcation, setOpenTrafficNotifcation] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState("");
  const [selectedSourceCoords, setSelectedSourceCoords] = useState(null);
  const [selectedDestinationCoords, setSelectedDestinationCoords] = useState(null);
  useEffect(() => {
    setModalOpen(true);
  }, [])
  return (
    <>
      <h1 className="text-white fixed top-0 left-0 w-screen h-10 text-center flex items-center justify-center bg-gray-600/50 z-60">
        Kathmandu Valley Jam-free Route Finder.
      </h1>
      <Homepage resetMap={resetMap} userLocation={userLocation} setUserLocation={setUserLocation} destinationCoords={destinationCoords} setDestinationCoords={setDestinationCoords} setResetMap={setResetMap} selectedSourceCoords={selectedSourceCoords} selectedDestinationCoords={selectedDestinationCoords} setModalOpen={setModalOpen} />
      <TrafficNotification
        modalOpen={modalOpen}
        setOpenTrafficNotifcation={setOpenTrafficNotifcation}
        openTrafficNotifcation={openTrafficNotifcation}
        hasMarker={
          !!selectedSourceCoords ||
          !!selectedDestinationCoords ||
          !!userLocation ||
          !!destinationCoords
        }
      />

      <Menu setResetMap={setResetMap} setSelectedSourceCoords={setSelectedSourceCoords} setSelectedDestinationCoords={setSelectedDestinationCoords} setModalOpen={setModalOpen} modalOpen={modalOpen} setUserLocation={setUserLocation}
        setDestinationCoords={setDestinationCoords} />
    </>

  )
}
