import React from 'react'
import Leftsection from './leftsection/Leftsection'
import RightSide from './rightsection/Rightsection'
import "./Home.css"

function FanHome() {
  return (
    <div className="home">
      <Leftsection/>
      <RightSide/>
    </div>
  )
}

export default FanHome
