import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { BigSidebar, SmallSidebar, Navbar } from '../../components/index'

export const SharedLayout = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  return (
    <main className='relative w-full h-screen  flex flex-col md:flex-row '>
      <SmallSidebar />
      <BigSidebar />

      <div className=' flex-1  h-full flex flex-col    '>
        <Navbar></Navbar>
        <div
          className={
            isSidebarOpen
              ? 'pl-80 bg-sky-50 w-full h-full mt-24'
              : 'bg-sky-50 w-full h-full mt-24'
          }
        >
          <Outlet />
        </div>
      </div>
    </main>
  )
}
