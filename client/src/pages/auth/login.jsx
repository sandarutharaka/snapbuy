import CommonForm from '@/components/common/form'
import { loginFormControls } from '@/config'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
  email :'',
  password: ''
}

function onsubmit()
{

}

const AuthLogin = () => {

  const [formData,setFormData] =useState(initialState)

  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Sign in to your account</h1>
        <p className='mt-2'>Don't have an account
          <Link className='font-medium ml-1 text-primary hover:underline' to='/auth/register'>Register</Link>
        </p>
        
      </div>
      <CommonForm
      formControls={loginFormControls}
      buttonText={'Log In'}
      formData={setFormData}
      onsubmit={onsubmit}

      />
    </div>
  )
}

export default AuthLogin