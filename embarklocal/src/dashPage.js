import React from 'react';
import './dashPage.css';
import {BrowserRouter, Route, Link } from "react-router-dom";
import Profile from './profile';

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
            <div>
                <h1>Offers</h1>
                {/* {
                    profile.map((prof)=>(
                    <Link to = "/ProfilePage">
                        <Profile 
                            imgsrc = {prof.data.imgsrc}
                            firstName = {prof.data.firstName}
                            lastName = {prof.data.lastName}
                            bio = {prof.data.bio}
                            location = {prof.data.loc}
                        />
                        </Link>
                    ))
                } */}
            </div>
        </div>
    ) 
}

export default DashPage;
