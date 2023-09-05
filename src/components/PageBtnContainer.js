import React from 'react'

import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import { changePage } from '../features/alljobs/allJobsSlice'
import { useSelector, useDispatch } from 'react-redux'
const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1
  })
  const nextPage = () => {
    let newPage = page + 1
    if (newPage > numOfPages) {
      newPage = 1
    }
    dispatch(changePage(newPage))
  }
  const prevPage = () => {
    let newPage = page - 1
    if (newPage < 1) {
      newPage = numOfPages
    }
    dispatch(changePage(newPage))
  }
  return (
    <div className=' w-3/2 h-10 mt-4 flex flex-row flex-wrap gap-4'>
      <button
        className='bg-white rounded-md w-24 capitalize flex justify-center items-center text-blue-700 shadow-md hover:shadow-lg'
        onClick={prevPage}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className='bg-indigo-100 flex-1  rounded-sm flex flex-row justify-between'>
        {pages.map((pageNumber) => {
          return (
            <button
              type='button'
              className={
                pageNumber === page
                  ? 'bg-blue-500 rounded-md w-12 text-white'
                  : 'text-blue-800 w-12 hover:bg-indigo-300 rounded-md'
              }
              key={pageNumber}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
      <button
        className='bg-white rounded-md w-24 capitalize flex justify-center items-center text-blue-700 shadow-md hover:shadow-lg'
        onClick={nextPage}
      >
        next
        <HiChevronDoubleRight />
      </button>
    </div>
  )
}

export default PageBtnContainer
