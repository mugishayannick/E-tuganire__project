import React from "react";
import trends1 from "../../../resources/images/trend1.jpg"
import trends2 from "../../../resources/images/trend2.jpg"
import trends3 from "../../../resources/images/trend3.jpg"
import trends4 from "../../../resources/images/trend4.jpg"

export default function TrendingAlbum() {
    return (
        <>
        <div className="top-middle">

            <h2 className="title">Trending Albums</h2>
            <div className="trending-music">
                <div className="single-trend">
                    <img src={trends1} alt="trending" />
                    <div className="artist-description">
                        <p>Juno Kizigenza</p>
                        <h2>NDARURA</h2>
                        <p>by Juno Kizigenza</p>
                    </div>
                </div>
                <div className="single-trend">
                    <img src={trends2} alt="trending" />
                    <div className="artist-description">
                        <p>Juno Kizigenza</p>
                        <h2>NDARURA</h2>
                        <p>by Juno Kizigenza</p>
                    </div>
                </div>

                <div className="single-trend">
                    <img src={trends3} alt="trending" />
                    <div className="artist-description">
                        <p>Juno Kizigenza</p>
                        <h2>NDARURA</h2>
                        <p>by Juno Kizigenza</p>
                    </div>
                </div>

                <div className="single-trend">
                    <img src={trends4} alt="trending" />
                    <div className="artist-description">
                        <p>Juno Kizigenza</p>
                        <h2>NDARURA</h2>
                        <p>by Juno Kizigenza</p>
                    </div>
                </div>
            </div>
            <div className="view-all-btn">
            <button >View all</button>
            </div>
            </div>
        </>
    )
}