import React from 'react'
import { NavLink } from 'react-router-dom'
import links from '../utils/links'
export const NavLinks = ({ toggle }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-1 mt-5'>
      {links.map((link) => {
        const { text, path, id, icon } = link

        return (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? ' flex flex-row justify-start items-center gap-10 pl-6 text-blue-700 rounded-md shadow-lg text-xl h-12  w-5/6 capitalize bg-indigo-200 '
                : 'flex flex-row justify-start items-center gap-10 pl-6  text-gray-600 text-xl h-12  w-5/6  hover:shadow-md hover:bg-indigo-100 capitalize'
            }
            key={id}
            onClick={toggle}
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}
