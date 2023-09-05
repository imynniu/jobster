import React from 'react'

import { useState } from 'react'
import { FormRow } from '../../components/index'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateUser } from '../../features/user/userSlice'
const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserData({ ...userData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, lastName, location } = userData

    if (!name || !email || !lastName || !location) {
      toast.error('Please Fill Out All Fields')
      return
    }
    dispatch(updateUser({ name, email, lastName, location }))
  }

  return (
    <div className='w-full h-full flex justify-center'>
      <form
        className='bg-white min-w-96 w-2/3  my-12 py-12 rounded-md shadow-md flex flex-col items-center'
        onSubmit={handleSubmit}
      >
        <h3 className=' text-3xl capitalize mb-4 w-4/5 '>profile</h3>

        <div className=' w-full flex flex-col items-center gap-1'>
          <FormRow
            type='text'
            name='name'
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='last name'
            name='lastName'
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='location'
            value={userData.location}
            handleChange={handleChange}
          />
          <button
            className='bg-blue-500 mt-12 w-80 h-10 rounded-md text-white hover:bg-blue-600'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile
