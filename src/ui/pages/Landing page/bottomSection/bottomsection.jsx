import React from "react";
import "./bottomsection.css"
import { AiOutlinePlayCircle } from "react-icons/ai"
import { RiMenuAddFill } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";

export default function BottomSection(){
    return(
        <>
        <div className="enjoy">
        <h1>Enjoy millions of songs and videos from Rwandan Artists</h1>
        </div>
        <div className="call-to-action">
            <h1>How we work</h1>
            <div className="channels">
                <div className="single-channel">
                    <AiOutlinePlayCircle className="middle-section-icon" />
                    <h3>play your favorite</h3>
                    <h4>listen to the songs you love,and discover new music</h4>
                </div>
                <div className="single-channel">
                    <RiMenuAddFill className="middle-section-icon"/>
                    <h3>make your playlist</h3>
                    <h4>we’ll help you make playlists or enjoy other playlists</h4>
                </div>
                <div className="single-channel">
                    <FiHeart className="middle-section-icon"/>
                    <h3>what you like</h3>
                    <h4>tell us what you like</h4>
                </div>
            </div>
        </div>
        </>
    )
}