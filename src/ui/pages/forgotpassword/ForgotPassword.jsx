import React from 'react'
import Leftsection from '../forgotpassword/leftsection/leftSection'
import Rightsection from '../forgotpassword/rightsection/rightSection'
import './ForgotPassword.css'

function ForgotPassword() {
  return (
    <div className='password-container'>
        <div className='left-section'>
            <Leftsection />
        </div>
        <div className='right-section'>
            <Rightsection />
        </div>
      
    </div>
  )
}

export default ForgotPassword
