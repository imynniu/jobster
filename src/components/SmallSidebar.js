import React from 'react'

import { FaTimes } from 'react-icons/fa'
import { Logo } from './Logo'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../features/user/userSlice'
import { NavLinks } from './NavLinks'

export const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <div
      className={isSidebarOpen ? 'w-full h-full relative md:hidden' : 'hidden'}
    >
      <div className='absolute inset-0 z-10 w-screen  h-screen  blur-lg opacity-80 bg-gray-900 z-20  '></div>
      <div className='  absolute z-40 w-full h-screen   flex flex-col items-center justify-center'>
        <div className='bg-white w-2/3 h-3/4 rounded-md flex flex-col items-center'>
          <button className='w-full mt-6 ml-6 mb-3' onClick={toggle}>
            <FaTimes size={32} className='text-blue-500' />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggle={toggle} />
        </div>
      </div>
    </div>
  )
}

export default SmallSidebar
