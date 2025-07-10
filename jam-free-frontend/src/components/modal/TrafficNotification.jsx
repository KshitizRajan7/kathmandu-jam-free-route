import Image from 'next/image';
import React, { useState } from 'react';

const TrafficNotification = ({ hasMarker, modalOpen, openTrafficNotifcation, setOpenTrafficNotifcation }) => {
    const [showMessage, setShowMessage] = useState(true);
    const [openMessage, setOpenMessage] = useState(true);
    if (!openTrafficNotifcation || modalOpen) return null;

    return (
        <>
            {!hasMarker && (
                <div className="absolute bottom-4 left-4 flex flex-col items-start z-50">
                    {showMessage && openMessage ? (
                        // Traffic alert message
                        <div className="relative bg-white/75 p-4 rounded-lg shadow-lg border border-gray-300 w-72 mb-2 left-7">
                            <button
                                onClick={() => setShowMessage(false)}
                                className="absolute top-1 right-2 text-sm font-bold text-red-500"
                            >
                                ×
                            </button>
                            <p className="text-sm font-semibold mb-2">
                                There is heavy traffic in these areas (Try alternate routes):
                            </p>
                            <ul className="list-disc list-inside text-sm">
                                <li>Koteshwor</li>
                                <li>Baneshwor</li>
                                <li>Gaushala</li>
                                <li>Kalanki</li>
                                <li>Maitighar</li>
                            </ul>

                            <div className="absolute -bottom-3 left-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-white" />
                        </div>
                    ) : openMessage ? (
                        // Help message
                        <div className="relative bg-white/75 p-4 rounded-lg shadow-lg border border-gray-300 w-72 mb-2 left-7">
                            <button
                                onClick={() => setOpenMessage(false)}
                                className="absolute top-1 right-2 text-sm font-bold text-red-500"
                            >
                                ×
                            </button>
                            <p className="text-sm font-semibold mb-2">How can I help you today?</p>
                            <div className="absolute -bottom-3 left-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-white" />
                        </div>
                    ) : null}


                    <Image
                        src="/trafficPolice.png"
                        width={125}
                        height={125}
                        alt="Traffic Police"
                        className="z-10 mb-12 "
                        onClick={() => setOpenMessage(true)}
                    />
                </div>
            )}
        </>
    );
};

export default TrafficNotification;
