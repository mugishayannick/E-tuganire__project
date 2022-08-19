import React from "react";
import "./Rightsection.css"
import pic4 from "../../../resources/images/pic4.png"
import pic5 from "../../../resources/images/pic5.png"
import pic6 from "../../../resources/images/pic6.png"

export default function BottomSection() {
    return (
        <div className="trends">
            <div className="single-trends">
                <img src={pic4} alt="" className="trends-img" />
                <div className="trends-words">
                    <p>NEW ALBUM RELEASED </p>
                </div>
            </div>
            <div className="single-trends">
                <img src={pic5} alt="" className="trends-img" />
                <div className="trends-words">
                    <p>TRENDING MUSIC </p>
                </div>
            </div>
            <div className="single-trends">
                <img src={pic6} alt="" className="trends-img" />
                <div className="trends-words">
                    <p>TRENDING ARTIST </p>
                </div>
            </div>
        </div>
    )
}
