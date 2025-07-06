'use client';
import React from 'react';
import { GoogleMap, LoadScript, TrafficLayer } from '@react-google-maps/api';

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


const Map = () => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    return (
        <div className="w-screen h-screen">
            <LoadScript googleMapsApiKey={apiKey} libraries={['places']}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} options={options}>
                    <TrafficLayer />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;
