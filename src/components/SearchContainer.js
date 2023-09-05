import React from 'react'
import { useState, useMemo } from 'react'
import { FormRow, FormRowSelect } from './index'
import { handleChange, clearFilters } from '../features/alljobs/allJobsSlice'
import { useSelector, useDispatch } from 'react-redux'

export const SearchContainer = () => {
  const { isLoading, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs)
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)
  const dispatch = useDispatch()
  const [localSearch, setLocalSearch] = useState('')
  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(clearFilters())
  }
  const debounce = () => {
    let timeoutID
    return (e) => {
      setLocalSearch(e.target.value)
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }))
      }, 1000)
    }
  }
  const optimizedDebounce = useMemo(() => debounce(), [])
  return (
    <div className='w-full h-auto  flex justify-center '>
      <form className='bg-white min-w-96 w-11/12  my-12 py-12 rounded-md shadow-md flex flex-col items-center'>
        <h4 className='text-3xl capitalize text-gray-700 tracking-tight'>
          search form
        </h4>
        <div className='w-full  grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {/* search position */}

          <FormRow
            type='text'
            name='search'
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          {/* search by status */}
          <FormRowSelect
            labelText='status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText='type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className='bg-rose-100 h-9 mt-14 rounded-md text-red-800 hover:bg-rose-300'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </div>
  )
}
