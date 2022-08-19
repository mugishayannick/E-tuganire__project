import React from "react";
import "./middle.css"


export default function singleTrendingMusic({trend}) {
    return (

        // <h2 className="title">Trending Music</h2>

        <div className="trending-music">
            <div className="single-trend">
                <img src={trend.songCoverUrl} alt="trending" />
             
                <div className="artist-description">
                    <p>{trend.artistName}</p>
                    <h2>{trend.songName}</h2>
                    {/* <p>by Juno Kizigenza</p> */}
                    <h6>by {trend.artistName}</h6>
                </div>
            </div>
        </div>
    )
}