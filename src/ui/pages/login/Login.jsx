import React from 'react'
import Leftsection from './leftsection/Leftsection'
import './Login.css'
import Rightsection from './rightsection/Rightsection'

function Login() {
  return (
    <div className='login-container'>
      <div className='left-container'>
        <Leftsection />
      </div>
      <div className='right-container'>
        <Rightsection />
      </div>
    </div>
  )
}

export default Login
