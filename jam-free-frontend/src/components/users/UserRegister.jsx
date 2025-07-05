"use client"
import { registerUser } from '@/services/userService';
import Link from 'next/link';
import React, { useState } from 'react'

const UserRegister = ({ onClose, onSwitchToLogin }) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await registerUser({ fullName, email, password });
        } catch (err) {
            setError('Register Failed.')
        } finally {
            setLoading(false);
        }
        onClose();
    }
    return (
        <div className='bg-white/70 rounded p-5'>
            <button className='float-right' onClick={onClose}>X</button>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h1 className='font-semibold'>User Register</h1>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-2 p-4 ">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1">Full Name:</label>
                        <input
                            id="fullName"
                            type="text"
                            className="border rounded-2xl p-2"
                            placeholder="Enter your full name."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        // required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1">Email:</label>
                        <input
                            id="email"
                            type="text"
                            className="border rounded-2xl p-2"
                            placeholder="Enter your email."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        // required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1">Password:</label>
                        <input
                            id="password"
                            type="password"
                            className="border rounded-2xl p-2"
                            placeholder="Enter your password."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        // required
                        />
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition ">
                            {loading ? 'Registering .. ' : 'Register'}
                        </button>
                    </div>
                </form>
                <div>
                    <p>
                        Already have an Account?
                        <span>
                            <button onClick={() => onSwitchToLogin("login")} className='bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-white hover:text-black transition'>Login</button>
                        </span>
                    </p>
                    {error && <p className='text-red-600'>{error}</p>}
                </div>
            </div>
        </div>
    )
}

export default UserRegister
