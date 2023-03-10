import React from 'react';
import ReactDOM from 'react-dom/client';
import './landingPage.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Link } from "react-router-dom";
import { redirect } from 'react-router-dom';
import EmbarkLogo from './elLogo.png'

const LandingPage = () => {

    return (
      <div id = "main">
        <div id = "nav-section">
          <ul id="navbar">
          <li><a id = "active-nav" href="">Home</a></li>
            <li>
            <Link to = "/RegisterPage"><a href="">Register</a></Link>
            <ul>
            </ul>
          </li>
          <li><Link to = "/LoginPage"><a href = "">Log In</a></Link></li>
          <li><Link to = "/FAQPage"><a href = "">FAQ</a></Link></li>
          </ul>
        </div>
        <div id = "header">
            <img src={EmbarkLogo}></img>
            <div id = "header-text">
                <h1>EmbarkLocal</h1>
                <p>Welcome to EmbarkLocal, your one-stop solution for authentic and meaningful travel experiences.
                With our platform, you can connect with local hosts who share your interests and offer unique, insider experiences
                that you won't find anywhere else. Join now as a traveler and find your perfect host match or sign up as a host and share your city's hidden gems with travelers from around the world.</p>
            </div>
        </div>
        {/* <div id = "search">
        <h2>Where do you want to go?</h2>
          <div class = "search-bar-container">
            <form action = "" class = "search-bar">
              <input type = "text" placeholder="Enter your travel location" name = "search" id="idk"></input>
              <Link to='/SearchPage'><button><img src = "https://assets.stickpng.com/images/585e4ad1cb11b227491c3391.png" alt = "search-icon"></img></button></Link>
            </form>
          </div>
        </div>  */}
        <div id = "featured-destinations">
            <h2>Our Featured Destinations</h2>
            <div id="thumbnails">
                <div class="img-container">
                    <img src = "https://media.timeout.com/images/105718842/750/562/image.jpg" alt = "Los Angeles"></img>
                </div> 
                <div class="img-container">
                    <img src = "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" alt = "London"></img>
                </div> 
                <div class="img-container">
                    <img src = "https://i.insider.com/6172f7164f281c001296a571?width=1136&format=jpeg" alt="Bali"></img>
                </div> 
            </div>	
        </div> 
        <div id = "testimonies">
            <h2>Hear From Our Travelers and Locals</h2>
            <div id = "thumbnails">
                <div class="img-container">
                    <img src = "https://images.unsplash.com/photo-1554757716-46f23cad3134?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt = "Surfer guy"></img>
                </div> 
                <div class="img-container">
                    <img src = "https://images.unsplash.com/photo-1556912999-373e36e42f2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt = "Woman"></img>
                </div> 
                <div class="img-container">
                    <img src = "https://images.unsplash.com/photo-1562876610-81705ff3fa43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="Woman"></img>
                </div> 
            </div>	
        </div> 
        <p>"As a surfer and beach lover, I never thought I could turn my passion into a way to connect 
                with travelers. But with EmbarkLocal, that's exactly what I did! I was able to share 
                my knowledge of the best surf spots and beach culture with like-minded travelers and it 
                was such an amazing experience. I loved being able to share my love for the ocean and help 
                travelers have a truly authentic experience. I highly recommend EmbarkLocal to any host 
                who wants to share their passions and make a difference in someone else's trip." - <strong>John</strong></p>
        <p>"I've always loved cooking and was so excited to find a EmbarkLocal host who could teach me how to make pasta 
            from scratch. The experience was truly unforgettable - not only did I learn how to make delicious pasta, but I 
            also got to share a meal and conversation with my host and other travelers. It was such a unique and intimate way 
            to get to know the local culture and traditions. I highly recommend EmbarkLocal to any traveler who wants to have 
            an authentic and meaningful travel experience. The connections I made with my host and the other travelers will stay 
            with me forever." - <strong>Sarah</strong> </p>
        <p>
            "I was hesitant about trying a new way of traveling, but I'm so glad I gave EmbarkLocal a chance. My host
            was an amazing guide and showed me parts of the city I never would have discovered on my own. We bonded
            over our shared love of art and history and I felt like I was experiencing the city with a local
            friend. The experience was truly unforgettable and made my trip so much more meaningful. I can't
            recommend EmbarkLocal enough to anyone who wants to have a unique and authentic travel experience." - <strong>Melissa</strong>
        </p>
    </div>
    )

    
  }


export default LandingPage;

