import React from 'react'
import { NavLinks } from './NavLinks'
import { Logo } from '../components/Logo'
import { useSelector } from 'react-redux'

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  return (
    <div
      className={
        isSidebarOpen
          ? 'w-72 fixed h-screen left-0 bg-white hidden md:block'
          : ' hidden '
      }
    >
      <div className=' w-full h-full'>
        <header className=' w-full h-24 flex justify-center items-center'>
          <Logo />
        </header>
        <NavLinks />
      </div>
    </div>
  )
}

export default BigSidebar
