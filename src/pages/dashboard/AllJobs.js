import React from 'react'
import { JobsContainer, SearchContainer } from '../../components'
import { LoadingSpinner } from '../../components/LoadingSpinner'

export const AllJobs = () => {
  return (
    <div className='bg-sky-50 py-8'>
      <SearchContainer />
      <JobsContainer />
    </div>
  )
}
