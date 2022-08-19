import React from "react";
import "./left.css"
import profile from "../../../resources/images/profile.jpg"
import dashboard from "../../../resources/icons/dashboard.svg"
import videos from "../../../resources/icons/videos.svg"
import Analytics from "../../../resources/icons/analytics.svg"
import chat from "../../../resources/icons/chat.svg"

export default function LeftSide() {
    return (
        <div className="dash-left">
            <div className="profile">
                <img src={profile} alt="" className="profile-pic"/>
            </div>
            <div className="dash-text">
                <p>Your Account</p>
            </div>
            
            <ul>
                <li> <img src={dashboard} alt="" className="dash-icon"/> 
                    Dashboard</li>
                <li>  <img src={videos} alt="" className="dash-icon"/> 
                    Videos</li>
                <li>
                <img src={Analytics} alt="" className="dash-icon"/> Analytics</li>
                <li>  <img src={chat} alt="" className="dash-icon"/> Messages</li>
                
            </ul>
        </div>
    )
}