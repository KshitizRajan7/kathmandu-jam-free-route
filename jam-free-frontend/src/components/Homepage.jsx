"use client";
import Image from "next/image";
import React, { useState } from "react";

const Homepage = () => {
    const [locationOff, isLocationOff] = useState(true);
    const [destination, isDestination] = useState(false);

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

            {/* Overlay */}
            {locationOff && (
                <div className="absolute top-0 left-0 z-10 h-screen w-screen bg-gray-900/50 flex justify-center items-center">
                    <div className="bg-white/50 text-black p-6 rounded-lg shadow-lg text-center transition-">
                        <h1 className="text-2xl font-semibold mb-4">
                            Please turn on your location.
                        </h1>
                        <button
                            onClick={() => { isLocationOff(false); isDestination(true) }}
                            className="px-6 py-2 bg-green-600 text-white font-bold rounded hover:bg-blue-700"
                        >
                            Turn On
                        </button>
                    </div>
                </div>
            )}
            {
                destination &&
                (
                    <div className="absolute top-0 left-0 z-10 h-screen w-screen bg-gray-900/50 flex justify-center items-center">
                        <div className="bg-white/50 text-black p-6 m-2 rounded-lg shadow-lg text-center flex flex-col justify-center gap-5">
                            <h1 className="text-xl font-semibold mb-4">
                                Please Select your Destination.
                            </h1>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                oninput="filterOptions(this)"
                            />
                            <select className="block justify-center border">
                                <option>Kathmandu</option>
                                <option>Lalitpur</option>
                                <option>Bhaktapur</option>
                                <option>Pokhara</option>
                                <option>Butwal</option>
                            </select>

                            <button
                                onClick={() => isDestination(false)}
                                className="px-6 py-2 bg-green-600 text-white font-bold rounded hover:bg-blue-700"
                            >
                                Search Route
                            </button>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default Homepage;
