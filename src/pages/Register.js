import React from 'react'
import { useState, useEffect } from 'react'
import { Logo, FormRow } from '../components/index'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, registerUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}
export const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  const { user, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password) {
      toast.warning('Please Fill Out All Fields')
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }))
      return
    }

    dispatch(registerUser({ name: name, email: email, password: password }))
  }
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [user])
  return (
    <section className='w-full h-screen flex flex-col items-center justify-center bg-sky-50'>
      <form
        className='w-96 h-auto bg-white rounded-md flex flex-col justify-center items-center pt-6 shadow-md'
        onSubmit={onSubmit}
      >
        <Logo />
        <h3 className='text-3xl text-gray-800 font-bold my-3 font-mono'>
          {values.isMember ? 'Login' : 'register'}
        </h3>

        {/* name field */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
            labelText='name'
          />
        )}
        {/* email field */}

        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          labelText='email'
        />

        {/* password field */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          labelText='password'
        />
        <button
          type='submit'
          disabled={isLoading}
          className={`w-80 h-8 rounded-md  text-white hover:bg-blue-600 mt-6 ${
            isLoading ? 'bg-blue-400' : 'bg-blue-500'
          }`}
        >
          {isLoading ? 'Is Loading' : 'Submit'}
        </button>
        <button
          type='button'
          className={`w-80 h-8 rounded-md  text-white hover:bg-blue-600 my-2 ${
            isLoading ? 'bg-blue-400' : 'bg-blue-500'
          }`}
          disabled={isLoading}
          onClick={() => {
            dispatch(
              loginUser({ email: 'testUser@test.com', password: 'secret' })
            )
          }}
        >
          {isLoading ? 'loading...' : 'Demo APP'}
        </button>
        <p className='text-gray-500'>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button
            onClick={toggleMember}
            className='text-blue-500 underline ml-2 mb-4'
          >
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </section>
  )
}
