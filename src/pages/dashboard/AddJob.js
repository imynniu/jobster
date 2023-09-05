import React, { useEffect } from 'react'

import { FormRow, FormRowSelect } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import {
  clearValues,
  handleChange,
  createJob,
  editJob,
} from '../../features/job/jobSlice'
const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!position || !company || !jobLocation) {
      toast.error('Please Fill Out All Fields')
      return
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      )
      return
    }

    dispatch(createJob({ position, company, jobLocation, jobType, status }))
  }
  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }
  const { user } = useSelector((store) => store.user)
  useEffect(() => {
    // eventually will check for isEditing
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }))
    }
  }, [])
  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }))
    }
  }, [])
  return (
    <div className='w-full h-auto  flex justify-center '>
      <form className='bg-white min-w-96 w-11/12  my-12 py-12 rounded-md shadow-md flex flex-col items-center'>
        <h3 className=' text-3xl capitalize mb-4 w-4/5'>
          {isEditing ? 'edit job' : 'add job'}
        </h3>

        <div className='w-full  grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {/* position */}
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job status */}
          <FormRowSelect
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />

          {/* job type */}
          <FormRowSelect
            name='jobType'
            labelText='job type'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          {/* btn container */}
          <div className='w-full flex justify-center'>
            <div className='flex flex-row justify-between  items-center w-5/6  mt-2'>
              <button
                type='button'
                className='w-2/5 h-12 bg-gray-400 rounded-md text-white hover:bg-gray-600'
                onClick={() => dispatch(clearValues())}
              >
                clear
              </button>
              <button
                type='submit'
                className='w-2/5 h-12 bg-blue-400 rounded-md text-white hover:bg-blue-600'
                onClick={handleSubmit}
                disabled={isLoading}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddJob
