import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'

import React from 'react'

export const Error = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-sky-50'>
      <div className='w-4/5  flex flex-col items-center'>
        <img src={img} alt='not found' className='w-1/3 ' />
        <h3 className='text-3xl mt-12 '>Page Not Found !!!</h3>
        <p className='text-gray-600 my-6'>
          We can't seem to find the page you're looking for
        </p>
        <Link to='/' className='underline underline-offset-2'>
          Back Home
        </Link>
      </div>
    </div>
  )
}
