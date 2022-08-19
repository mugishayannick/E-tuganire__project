import React from 'react'
import Details from '../details/Details';
import avatar5 from "../../../../resources/images/avatar5.jpg"
import "./Lefthead.css"

function lefthead() {
  return (
    <div className="left-section">
      <div className="header">
          <h1>Add Artist</h1>
      </div>
      <div>
      <Details
            profile={avatar5}
            names="Joe"
            subscribers="420k,subs"
            genre="genre, rap"
        />
        <Details
            profile={avatar5}
            names="Ben"
            subscribers="420k,subs"
            genre="genre, rap"
        />
        <Details
            profile={avatar5}
            names="Meddy"
            subscribers="420k,subs"
            genre="genre, rap"
        />
        <Details
            profile={avatar5}
            names="Chriss"
            subscribers="420k,subs"
            genre="genre, rap"
        />
        <Details
            profile={avatar5}
            names="Bushali"
            subscribers="420k,subs"
            genre="genre, rap"
        />
        <Details
            profile={avatar5}
            names="Karire"
            subscribers="420k,subs"
            genre="genre, rap"
        />
      </div>      
    </div>
  )
}
export default lefthead;
