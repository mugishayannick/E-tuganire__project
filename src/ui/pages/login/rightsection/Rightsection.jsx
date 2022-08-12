import React from 'react'
import './Rightsection.css'
import { Link } from 'react-router-dom'
// import Input from '../../../components/inputs/Input'

function Rightsection() {
  return (
    <div className='login-form'>
      <form className='form'>
      <label></label>
      <input
        className='form-input' 
        type="email" 
        placeholder='Email'
        required
      />
      <label></label>
      <input
        className='form-input' 
        type="password" 
        placeholder='password'
        required
      />
      </form>
      <button className='login-button'>Log in</button>
      <Link to="/ForgotPassword">Forgot password?</Link>
      <p>Don't have an account? <Link className='link' to="/Signup">Sign in</Link></p>
    </div>
  )
}

export default Rightsection
