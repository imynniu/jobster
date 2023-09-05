import React from 'react'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { Logo } from './Logo'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, toggleSidebar } from '../features/user/userSlice'
import { clearStore } from '../features/user/userSlice'
export const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <div className=' fixed pl-auto w-full flex-auto bg-white flex flex-raw h-24 justify-between items-center px-12 gap-8 z-10'>
      <button type='button' className='toggle-btn' onClick={toggle}>
        <FaAlignLeft className='text-blue-500' size={28} />
      </button>
      <div>
        <div className='block md:hidden w-32'>
          <Logo />
        </div>

        <h3 className='hidden md:block text-4xl text-gray-600 capitalize'>
          dashboard
        </h3>
      </div>
      <div className='bg-blue-500 w-36 h-8 relative rounded-md flex justify-center '>
        <button
          type='button'
          className='flex flex-raw justify-between  items-center w-full px-4 text-white '
          onClick={() => setShowLogout(!showLogout)}
        >
          <FaUserCircle />
          <p className='truncate capitalize'>{user?.name}</p>

          <FaCaretDown />
        </button>
        <div
          className={
            showLogout
              ? 'absolute -bottom-9 w-36 rounded-md text-blue-800 capitalize h-8 bg-blue-100 flex justify-center items-center'
              : 'hidden'
          }
        >
          <button
            type='button'
            className='capitalize'
            onClick={() => {
              dispatch(clearStore('Logout Successful...'))
            }}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  )
}
