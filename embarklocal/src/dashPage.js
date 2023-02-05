import React from 'react';
import './dashPage.css';
import {BrowserRouter, Route, Link, useParams, useLocation } from "react-router-dom";
import Profile from './profile';

const DashPage = (props) => {
    const {type} = useParams();
    const {state} = useLocation();
    console.log(type)
    console.log(state)
    return(
        <div class = "parent">
            <div id = "nav-section">
          <ul id="navbar">
          <li><Link to = "/"><a href="">Home</a></Link></li>
            <li>
            <Link to = "/RegisterPage"><a href="">Register</a></Link>
            <ul>
            </ul>
          </li>
          <li><Link to = "/LoginPage"><a href = "">Log In</a></Link></li>
          <li><Link to = "/FAQPage"><a id = "active-nav" href = "">FAQ</a></Link></li>
          </ul>
        </div>
            <h1>Welcome {state.name}!</h1>
            <div id = "search">
                <h2>Where do you want to go?</h2>
                <div class = "search-bar-container">
                    <form action = "" class = "search-bar">
                    <input type = "text" placeholder="Enter your travel location" name = "search" id="idk"></input>
                    <Link to='/SearchPage' state={state}><button><img src = "https://assets.stickpng.com/images/585e4ad1cb11b227491c3391.png" alt = "search-icon"></img></button></Link>
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
