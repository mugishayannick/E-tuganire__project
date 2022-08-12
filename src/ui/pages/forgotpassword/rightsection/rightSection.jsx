import React from 'react'
import './rightSection.css'
import { Link } from 'react-router-dom'

function rightSection() {
  return (
    <div className='forgot-form'>
        <div className='header'>
            <h2>Forgot Password ?</h2>
            <p>Please create a new password</p>
        </div>
       <form className='form'>
      <label></label>
      <input
        className='form-input' 
        type="password" 
        placeholder='New Password'
        required
      />
      <label></label>
      <input
        className='form-input' 
        type="password" 
        placeholder='confirm New Password'
        required
      />
      <label></label>
      <input
        className='form-input' 
        type="text" 
        placeholder='confirmation code'
        required
      />
      </form>
      <button className='login-button'><Link className='form-link' to="/Login">Reset password</Link></button>
    </div>
  )
}

export default rightSection
