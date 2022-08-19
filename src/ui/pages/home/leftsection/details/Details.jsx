import React from "react";
import "./Details.css";

function Details({ profile, names, subscribers, genre }) {
  return (
    <div className="details-container">
      <div className="image">
        <img src={profile} alt="" />
      </div>
      <div className="content">
        <h3>{names}</h3>
        <p>{subscribers}</p>
        <h4>{genre}</h4>
      </div>
      <button>ADD</button>
    </div>
  );
}

export default Details;
