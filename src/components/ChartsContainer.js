import React from 'react'

import { useState } from 'react'

import { BarChartComponent } from './BarChart'
import { AreaChartComponent } from './AreaChart'

import { useSelector } from 'react-redux'
export const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const { monthlyApplications: data } = useSelector((store) => store.allJobs)
  return (
    <div className='w-11/12 flex flex-col justify-center items-center '>
      <h4 className='text-3xl text-center my-3 tracking-tighter'>
        Monthly Applications
      </h4>
      <button
        type='button'
        className='text-blue-500 underline'
        onClick={() => setBarChart(!barChart)}
      >
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </div>
  )
}
