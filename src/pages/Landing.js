import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../components/Logo'
import main from '../assets/images/main.svg'
export const Landing = () => {
  return (
    <main className='flex flex-col items-center  w-full h-screen sm:min-w-min bg-sky-50'>
      <nav className='flex  flex-col  w-3/5 min-w-96  mt-8'>
        <Logo />
      </nav>
      <div className='flex flex-raw w-3/5 min-w-96 h-96 mt-24 '>
        <div className=' flex flex-col  justify-center  w-96  '>
          <h1 className='text-4xl font-bold tracking-tight font-mono w-96'>
            Job <span className='text-blue-500'>Tracking</span> App
          </h1>
          <p className='text-gray-600 indent-8 text-justify my-5 '>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Link
            to='/register'
            className='bg-blue-500 hover:bg-blue-600 w-48 h-10 rounded-md text-white  flex items-center justify-center'
          >
            Login/Register
          </Link>
        </div>
        <img
          src={main}
          alt='job hunt'
          className=' hidden w-1/2 h-auto lg:block '
        />
      </div>
    </main>
  )
}
