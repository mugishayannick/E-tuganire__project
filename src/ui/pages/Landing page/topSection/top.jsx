import React from "react";
import "./top.css"
import main_bg from "../../../resources/images/main_bg.png"
import arrowDown from "../../../resources/icons/arrowDown.svg";
import {Link} from "react-router-dom";

export default function Top() {
    return (

        <div className="header-part">
            <div className="navbar">
                {/* <a href="/">Home </a> */}
                <Link to="/signup">Sign Up</Link>
                <Link to="/FanHome">About</Link>
                {/* <a href="#">About</a> */}
                {/* <a href="/Signup">Sign Up</a> */}
            </div>
            <div className="main-background">
                <img src={main_bg} alt="girl picture" />
                <div className="main-header">
                    <p>Join The Art Community</p>
                </div>
            </div>
            <div className="input_container">
                <input type="text" placeholder="Now Trending" />
                <div className="button-genres">
                    <button>
                        <p>Genres</p>
                        <img src={arrowDown} alt="" />
                    </button>
                </div>
            </div>
        </div>

    )
}