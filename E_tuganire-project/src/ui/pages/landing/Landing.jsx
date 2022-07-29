import React from 'react'
import './Landing.css'
import NavBar from './NavBar/NavBar'

function Landing() {
  return (
    <div className='landing-container'>
      <div className='nav-bar'>
        <NavBar />
      </div>
      <div className='up-content'>
          <div className='header'>
              <ul>
                  <li>Shortly About Us</li>
                  <li>Communities</li>
                  <li>Useful Links</li>
              </ul>

          </div>
          <div className='down-content'>
            <div className='left'>
                <p>e-tuganire is a web platform that aims at connecting artists and their fans. it will also help artist who are talented but they cannot connect to their fan base.and this platform will 
                    also help the artist to raise their promotion.
                </p>
                <p>fan will also benefit from this platform by staying update on the news about their facorite artist, easy communication and support their artist.</p>

            </div>
            <div className='middle'>
              <ul>
                  <li>For Artist</li>
                  <li>Fans</li>
                  <li>For artists</li>
                  <li>For artists</li>
              </ul>

          </div>
          <div className='right'>
            <ul>
                <li>Support</li>
                <li>Web App</li>
            </ul>
          </div>
          </div>
         

      </div>
    </div>
  )
}

export default Landing
