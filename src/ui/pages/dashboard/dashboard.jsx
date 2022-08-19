import React from "react";
import LeftSide from "./left-part/left";
import MiddleSide from "./middle-part/middle";
import RightSide from "./right-part/right";
import "./dashboard.css"

export default function Dashboard(){
    return(
        <div className="dashboard-css">
        <LeftSide/>
        <MiddleSide/>
        <RightSide/>
        </div>
    )
}