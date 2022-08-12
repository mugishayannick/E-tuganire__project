import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Landing from './pages/landing/Landing'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import ForgotPassword from './pages/forgotpassword/ForgotPassword'

function App() {
  return (
    <div className='App=container'>
      <Router>
        <Routes>
          <Route path='/Signup' element={  <Signup /> } />
          <Route path='/Login' element={  <Login /> } />
          <Route path='/' element={ <Home />} />
          <Route path='/Landing' element={ <Landing />} />
          <Route path='/forgotPassword' element={ <ForgotPassword /> } />
        </Routes>
     
      </Router>
    </div>
  )
}

export default App
