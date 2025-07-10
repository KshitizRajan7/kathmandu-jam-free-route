"use client"
import { LocateFixed, Map, Route, TrafficCone, User } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import UserLogin from './users/UserLogin';
import UserRegister from './users/UserRegister';
import UserContext from '@/context/UserContext';
import SourceDestinationModal from './modal/SourceDestinationModal';

const Menu = ({ setUserLocation,
    setDestinationCoords, modalOpen, setModalOpen, setResetMap, setSelectedSourceCoords, setSelectedDestinationCoords }) => {
    const { user } = useContext(UserContext);
    const [authForm, setAuthForm] = useState(null);
    const [showSourceDestinationModal, setShowSourceDestinationModal] = useState(false);
    useEffect(() => {
        setModalOpen(showSourceDestinationModal || authForm);
    }, [authForm, showSourceDestinationModal]);

    return (
        <div className='fixed bottom-0 left-0 w-full text-white bg-gray-600/50 '>
            {!modalOpen && (<><ul className='flex justify-between w-full h-6 text-sm font-medium p-2'>
                <li className='flex items-center gap-2'>
                    <span className='w-4 h-4 bg-[#10C886] rounded'></span>
                    Smooth
                </li>
                <li className='flex items-center gap-2'>
                    <span className='w-4 h-4 bg-[#FFCF42] rounded'></span>
                    Moderate
                </li>
                <li className='flex items-center gap-2'>
                    <span className='w-4 h-4 bg-[#F34E41] rounded'></span>
                    Heavy
                </li>
                <li className='flex items-center gap-2'>
                    <span className='w-4 h-4 bg-red-950 rounded'></span>
                    Traffic jams
                </li>
            </ul>

                <ul className='flex justify-between p-2 divide-x divide-white text-white text-sm text-center items-center h-12'>
                    <li className='px-4 flex flex-col items-center' onClick={() => {
                        setResetMap(true), setSelectedSourceCoords(null), setSelectedDestinationCoords(null), setUserLocation(null), setDestinationCoords(null);
                    }}>
                        <Map size={20} />
                        <span>Map</span>
                    </li>
                    <li className='px-4 flex flex-col items-center'>
                        <Route size={20} />
                        <span>Alt Routes</span>
                    </li>
                    <li className='px-a4 flex flex-col items-center' onClick={() => { setShowSourceDestinationModal(true), setModalOpen(true) }}>
                        <LocateFixed size={20} />
                        <span>Select</span>
                    </li>
                    <li className='px-4 flex flex-col items-center'>
                        <TrafficCone size={20} />
                        <span>Traffic</span>
                    </li>
                    <li className='px-4 flex flex-col items-center' onClick={() => setAuthForm("login")}>
                        <User size={20} />
                        <span>{user ? user.name : 'login'}</span>
                    </li>
                </ul></>)}
            {
                showSourceDestinationModal && (
                    <div className='bg-gray-800/30 w-screen h-screen flex justify-center items-center'>
                        <SourceDestinationModal onClose={() => setShowSourceDestinationModal(false)} setSelectedSourceCoords={setSelectedSourceCoords} setSelectedDestinationCoords={setSelectedDestinationCoords} />
                    </div>
                )
            }
            {authForm === "login" && (
                <div className='bg-gray-800/30 w-screen h-screen flex justify-center items-center'>
                    <UserLogin onClose={() => setAuthForm(null)} onSwitchToRegister={() => setAuthForm("register")} />
                </div>
            )
            }
            {authForm === "register" && (
                <div className='bg-gray-800/30 w-screen h-screen flex justify-center items-center'>
                    <UserRegister onClose={() => setAuthForm(null)} onSwitchToLogin={() => setAuthForm("login")} />
                </div>
            )
            }
        </div>
    )
}

export default Menu
