"use client"
import Homepage from "@/components/Homepage";
import Menu from "@/components/Menu";
import DirectDestination from "@/components/modal/DirectDestination";
import UserLogin from "@/components/users/UserLogin";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [resetMap, setResetMap] = useState(false);
  const [selectedSourceCoords, setSelectedSourceCoords] = useState(null);
  const [selectedDestinationCoords, setSelectedDestinationCoords] = useState(null);
  return (
    <>
      <h1 className="text-white fixed top-0 left-0 w-screen h-10 text-center flex items-center justify-center bg-gray-600/50 z-60">
        Kathmandu Valley Jam-free Route Finder.
      </h1>
      <Homepage resetMap={resetMap} setResetMap={setResetMap} selectedSourceCoords={selectedSourceCoords} selectedDestinationCoords={selectedDestinationCoords} />
      <Menu setResetMap={setResetMap} setSelectedSourceCoords={setSelectedSourceCoords} setSelectedDestinationCoords={setSelectedDestinationCoords} />
    </>

  )
}
