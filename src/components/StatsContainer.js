import React from 'react'

import { StatItem } from './StatItem'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'

import { useSelector } from 'react-redux'
export const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs)
  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: 'text-yellow-600',
      border: 'border-yellow-600',
      bcg: 'bg-amber-100',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: 'text-blue-600',
      border: 'border-blue-600',
      bcg: 'bg-sky-100',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: 'text-red-600',
      border: 'border-red-600',
      bcg: 'bg-pink-100',
    },
  ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-8 my-8'>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </div>
  )
}
