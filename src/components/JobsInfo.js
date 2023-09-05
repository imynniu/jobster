import React from 'react'

const JobInfo = ({ icon, text }) => {
  return (
    <div className='flex flex-row justify-start items-center gap-2 text-gray-600 text-sm mx-2'>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </div>
  )
}

export default JobInfo
