"use client"
import React, { useContext, useState } from 'react'
import { loginUser } from '@/services/userService';
import UserContext from '@/context/UserContext';

const UserLogin = ({ onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await loginUser({ email, password });
      setUser(email);
    } catch (err) {
      setError("Failed to Login. Invalid Credentials.");
    } finally {
      setLoading(false);
    }
    onClose();
  }
  return (
    <div className='bg-white/70 rounded p-5 text-black'>
      <button className='float-right' onClick={onClose}>X</button>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='font-semibold'>User Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-2 p-4 ">
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
            <button type="submit" className="cursor-pointer bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition ">
              {loading ? 'Logging in... ' : 'Login'}
            </button>
          </div>
        </form>
        <div>
          <p>
            No Account?
            <span>
              <button onClick={() => onSwitchToRegister("register")} className='cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-white hover:text-black transition'>Register</button>
            </span>
          </p>
        </div>
        {error && <p className='text-red-600'>{error}</p>}
      </div>
    </div>
  )
}

export default UserLogin
