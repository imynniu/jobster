import React from 'react'

export const StatItem = ({ count, title, icon, color, bcg, border }) => {
  return (
    <div
      className={`bg-white  flex flex-col gap-2 rounded-md h-36 justify-center shadow-md px-8 border-b-4 ${border}`}
    >
      <header className='flex flex-row items-center justify-between px-4'>
        <span className={`text-4xl ${color}`}>{count}</span>
        <span
          className={`text-3xl w-14 h-14 rounded-sm flex justify-center items-center ${color} ${bcg}`}
        >
          {icon}
        </span>
      </header>
      <h5 className='text-xl mt-3 text-gray-600 font-light'>{title}</h5>
    </div>
  )
}
