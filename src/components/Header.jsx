import React from 'react'
import {GoBell} from "react-icons/go"
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 ml-16'>
       <div className='items-center'>
          <h1 className='text-xs'>Welcome Back!</h1>
          <p className='text-xl font-semibold'>Jane</p>
       </div>
       <div className='flex items-center space-x-5'>
          <div className='flex items-center'>
            <input type="text" placeholder='Search...' 
            className='bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-600'/>
            <CiSearch size={28} className='text-indigo-700 font-bolder'/>
          </div>
          <div className='md:flex items-center space-x-5 hidden'>
            <button className='relative text-2xl text-gray-600'>
              <GoBell size={28} />
              <span className='absolute top-0 right-0 -mt-1 -mr-1 flex flex-column md:flex-row justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-white'>
                11
              </span>
            </button>
            <img className='w-10 h-10 rounded-full border-4 border-indigo-400'
             src='https://images.unsplash.com/photo-1527461583024-bc7b729f4b48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3NlJTIwdXB8ZW58MHx8MHx8fDA%3D' alt="" />
          </div>
       </div>
    </div>
  )
}

export default Header