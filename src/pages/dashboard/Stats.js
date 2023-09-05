import React from 'react'
import { useEffect } from 'react'
import {
  StatsContainer,
  LoadingSpinner,
  ChartsContainer,
} from '../../components/index'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../features/alljobs/allJobsSlice'
export const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(showStats())
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return <LoadingSpinner />
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}
