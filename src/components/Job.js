import React from 'react'

import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import JobInfo from './JobsInfo'
import moment from 'moment/moment'
import { deleteJob, setEditJob } from '../features/job/jobSlice'
export const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch()
  const date = moment(createdAt).format('MMM Do, YYYY')
  const statusColor = (state) => {
    if (state === 'pending') {
      return 'bg-amber-100 text-yellow-600 rounded-md w-24 text-center capitalize'
    }
    if (state === 'interview') {
      return 'bg-sky-100 text-blue-600 rounded-md w-24 text-center '
    }
    if (state === 'declined') {
      return 'bg-pink-100 text-red-600 rounded-md w-24 text-center '
    }
    return 'bg-gray-100 text-white rounded-md w-24 text-center '
  }
  return (
    <div className='flex flex-col w-full rounded-md shadow-md hover:shadow-lg bg-white py-4 px-2'>
      <header className='flex flex-row border-b pb-2'>
        <div className='w-12 h-12 rounded-md bg-indigo-400 text-white text-2xl font-bold flex justify-center  items-center'>
          {company.charAt(0)}
        </div>
        <div className=' ml-8 flex flex-col'>
          <h5 className='text-xl'>{position}</h5>
          <p className='text-sm text-gray-400 mt-2'>{company}</p>
        </div>
      </header>
      <div className='mt-2 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 '>
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={statusColor(status)}>{status}</div>
        </div>
        <footer>
          <div className='flex flex-row gap-2 mt-2'>
            <div className='w-24 h-7 bg-emerald-100 text-green-700  shadow-md rounded-sm flex justify-center items-center hover:bg-emerald-300'>
              {' '}
              <Link
                to='/add-job'
                className=''
                onClick={() => {
                  dispatch(
                    setEditJob({
                      editJobId: _id,
                      position,
                      company,
                      jobLocation,
                      jobType,
                      status,
                    })
                  )
                }}
              >
                Edit
              </Link>
            </div>

            <button
              type='button'
              className='bg-rose-100 text-pink-700 w-24 h-7 shadow-md rounded-sm hover:bg-rose-300'
              onClick={() => {
                dispatch(deleteJob(_id))
              }}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
