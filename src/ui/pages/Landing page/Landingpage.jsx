import React from "react";
import Top from "./topSection/top";
import Middle from "./middleSection/trendingMusic"
import TrendingAlbum from "./middleSection/trendingAlbums";
import BottomSection from "./bottomSection/bottomsection";
export default function LandingPage(){
    return(
        <>
        <Top/>
        <Middle/>
        <TrendingAlbum/>
        <BottomSection/>
        </>
    )
}