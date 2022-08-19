import React from "react";
import "./middle.css"
import allsongsdata from "../../../data/trends.json"
import SingleTrendingMusic from "./singleTrendingSong";
import { Link } from "react-router-dom";

export default function SingleSong() {
    console.log(allsongsdata['trending-music']);
    return (
        <div className="top-middle">
            <h2 className="title">Trending Music</h2>
            <div className="trending-music">                
                    {
                        allsongsdata['trending-music'].map((data) => (<SingleTrendingMusic trend={data} />))
                    }                
            </div>
            <div className="view-all-btn">
                <button>  
                <Link to="/FanHome">
                    View all </Link></button>
            </div>
            
        </div>
    )
}