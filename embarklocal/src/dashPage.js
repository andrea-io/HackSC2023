import React from 'react';
import './profilePage.css';
import {BrowserRouter, Route, Link } from "react-router-dom";

const DashPage = () => {
    return(
        <div class = "parent">
            <h1>Welcome Ana!</h1>
            <div id = "search">
                <h2>Where do you want to go?</h2>
                <div class = "search-bar-container">
                    <form action = "" class = "search-bar">
                    <input type = "text" placeholder="Enter your travel location" name = "search" id="idk"></input>
                    <Link to='/SearchPage'><button><img src = "https://assets.stickpng.com/images/585e4ad1cb11b227491c3391.png" alt = "search-icon"></img></button></Link>
                    </form>
                </div>
            </div> 
        </div>
    ) 
}

export default DashPage;
