import { LocateFixed, Map, Route, TrafficCone, User } from 'lucide-react'
import React from 'react'

const Menu = () => {
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
                <li className='px-4 flex flex-col items-center'>
                    <LocateFixed size={20} />
                    <span>Select</span>
                </li>
                <li className='px-4 flex flex-col items-center'>
                    <TrafficCone size={20} />
                    <span>Traffic</span>
                </li>
                <li className='px-4 flex flex-col items-center'>
                    <User size={20} />
                    <span>Login</span>
                </li>
            </ul>
        </div>
    )
}

export default Menu
