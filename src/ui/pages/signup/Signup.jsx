import React from 'react'
import './Signup.css'
import Input from '../../components/inputs/Input'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="signup-form">
        <div className="signup-left">
            <img src="" alt="" />
        </div>
        <div className="signup-right">
            <div className="signup-heading">
                <div className="header">
                  <h1>E-Tuganire</h1>
                </div>
                <div className="accounts">
                  <h3>Artist Account</h3>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <h4>Fan Account </h4>



                </div>
            </div>
            <div className="signup-content">
                <Input/>
                
            </div>
            <div className="btn">
              <Button />
            </div>
            <div className="footer">
              <p>You have an account?<Link to="/Login">Log in</Link></p>
            </div>

            

        </div>
      
    </div>
  )
}

export default Signup

