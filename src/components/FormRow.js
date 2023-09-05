import React from 'react'

export const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className=' w-full h-auto flex flex-col justify-center items-center relative'>
      <label
        htmlFor={name}
        className='w-5/6 text-gray-600 capitalize mb-2 mt-4'
      >
        {labelText || name}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className='border-2 border-gray-300 rounded-lg py-2 px-4 w-5/6  focus:outline-none focus:border-blue-500 transition duration-300'
      />
    </div>
  )
}
