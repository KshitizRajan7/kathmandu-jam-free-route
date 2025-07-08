'use client';
import React, { use, useEffect, useState } from 'react';
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker, TrafficLayer } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: 27.7,
    lng: 85.3,
};


const options = {
    restriction: {
        latLngBounds: {
            north: 27.85,
            south: 27.60,
            west: 85.20,
            east: 85.45,
        },
        strictBounds: true,
    },
    maxZoom: 16,
    minZoom: 12,
    disableDefaultUI: true,
    zoomControl: true,
};


const Map = ({ userLocation,destinationCoords, selectedDestinationCoords, selectedSourceCoords }) => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const [direction, setDirection] = useState(null);

    useEffect(() => {
        if (userLocation && destinationCoords) {
            const directionsService = new window.google.maps.DirectionsService();
            directionsService.route(
                {
                    origin: userLocation,
                    destination: destinationCoords,
                    travelMode: window.google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        setDirection(result);
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                }
            );
        }
    }, [userLocation,destinationCoords]);


    return (
        <div className="w-screen h-screen">
            <LoadScript googleMapsApiKey={apiKey} libraries={['places']}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} options={options}>
                    {(userLocation && !selectedSourceCoords) && <Marker position={userLocation} />}
                    {selectedSourceCoords && <Marker position={selectedSourceCoords} />}
                    {(destinationCoords && !selectedDestinationCoords) && <Marker position={destinationCoords} />}
                    {selectedDestinationCoords && <Marker position={selectedDestinationCoords} />}
                    {direction && <DirectionsRenderer directions={direction} />}
                    <TrafficLayer />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;
