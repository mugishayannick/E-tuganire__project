import React from "react";
import BottomSection from "./bottom-section";
import Header from "./header";
import Channels from "./middle-section";
import "./Rightsection.css"

function RightSide(){
    return(
        <div className="right-side">
        <Header/>
        <Channels/>
        <BottomSection/>
        </div>
    )
}
export default RightSide