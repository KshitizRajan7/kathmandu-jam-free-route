"use client"
import { LocateFixed, Map, Route, TrafficCone, User } from 'lucide-react'
import React, { useContext, useState } from 'react'
import UserLogin from './users/UserLogin';
import UserRegister from './users/UserRegister';
import UserContext from '@/context/UserContext';

const Menu = () => {
    const { user } = useContext(UserContext);
    const [authForm, setAuthForm] = useState(null);
    return (
        <div className='fixed bottom-0 left-0 w-full bg-gray-600/50 z-50'>
            <ul className='flex justify-between p-2 divide-x divide-white text-white text-sm text-center items-center h-12'>
                <li className='px-4 flex flex-col items-center'>
                    <Map size={20} />
                    <span>Map</span>
                </li>
                <li className='px-4 flex flex-col items-center'>
                    <Route size={20} />
                    <span>Alt Routes</span>
                </li>
                <li className='px-a4 flex flex-col items-center'>
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
            </ul>
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
