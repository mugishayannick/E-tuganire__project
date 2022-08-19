import React from "react";

import avatar5 from "../../../resources/images/avatar5.jpg"
import "./Rightsection.css"
import { AiOutlinePlayCircle } from "react-icons/ai"
import { RiMenuAddFill } from "react-icons/ri"
import { FiHeart } from "react-icons/fi"
import pic1 from "../../../resources/images/pic1.png"
import pic2 from "../../../resources/images/pic2.png"
import pic3 from "../../../resources/images/pic3.png"

function Channels() {
    return (
        <>
            {/* <h2>Channels list</h2> */}
            {/* <img src={avatar5} className="channel-picture" /> */}
            <div className="channels">
                <img src={pic1} alt="" />
            </div>
            <div className="middle-channel-pictures">
                <img src={pic2} alt="" />
                <img src={pic3} alt="" />
            </div>
        </>
    )
}
export default Channels