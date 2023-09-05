import React from 'react'
import { getAllJobs } from '../features/alljobs/allJobsSlice'
import { useEffect } from 'react'
import { Job } from './Job'
import { useSelector, useDispatch } from 'react-redux'
import { LoadingSpinner } from './LoadingSpinner'
import PageBtnContainer from './PageBtnContainer'

export const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllJobs())
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort])
  if (isLoading) {
    return <LoadingSpinner />
  }

  if (jobs.length === 0) {
    return <h2>No jobs to display...</h2>
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h5 className='text-bas test-gray-500  w-11/12 capitalize font-bold'>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className='w-11/12  grid  gap-2 grid-cols-1 md:grid-cols-2 '>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </div>
  )
}
