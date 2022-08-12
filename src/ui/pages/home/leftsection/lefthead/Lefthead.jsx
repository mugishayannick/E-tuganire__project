import React from 'react'
import Details from '../details/Details';
// import image from '../../../../resources/images/image1.png'

function lefthead() {
  return (
    <div>
      <div className="header">
          <h1>Add Artist</h1>
      </div>
      <div>
      <Details
            // profile={}
            names="Yannick"
            subscribers="420k,subs"
            genre="genre, rap"
        />
      </div>
       

      
    </div>
  )
}

export default lefthead;
