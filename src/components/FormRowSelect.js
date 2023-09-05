import React from 'react'

export const FormRowSelect = ({
  labelText,
  name,
  value,
  handleChange,
  list,
}) => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center relative'>
      <label
        htmlFor={name}
        className='w-5/6 text-gray-600 capitalize mb-2 mt-4'
      >
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        id={name}
        onChange={handleChange}
        className='border-2 border-gray-300 rounded-lg py-2 px-4 w-5/6  focus:outline-none focus:border-blue-500 transition duration-300'
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          )
        })}
      </select>
    </div>
  )
}
