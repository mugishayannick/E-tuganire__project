import React from 'react'
import Leftsection from './leftsection/Leftsection'
import './Login.css'
import Rightsection from './rightsection/Rightsection'

function Login() {
  return (
    <div className='login-container'>
      <Leftsection />
      <Rightsection />
    </div>
  )
}

export default Login
