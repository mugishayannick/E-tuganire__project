import React from 'react'
import './Rightsection.css'
// import Input from '../../../components/inputs/Input'

function Rightsection() {
  return (
    <div className='login-form'>
      <div className='login-header'>
        <h1>E_Tuganire</h1>
      </div>
      <form className='form'>
      <label></label>
      <input 
        type="email" 
        placeholder='Email'
        required
      />
      </form>
    </div>
  )
}

export default Rightsection
