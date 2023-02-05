import React from 'react';
import ReactDOM from 'react-dom/client';
import './faq.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Link } from "react-router-dom";
import { redirect } from 'react-router-dom';

const FAQPage = () => {

    return (
        <div id = "main">
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
        <div class="faq-header">Frequently Asked Questions</div>
    
        <div class="faq-content">
            <div class="faq-header">General</div>
            <div class="faq-question">
            <input id="q1" type="checkbox" class="panel"></input>
            <div class="plus">+</div>
            <label for="q1" class="panel-title">What is EmbarkLocal?</label>
            <div class="panel-content">EmbarkLocal is a platform that helps travelers
                make authentic and meaningful connections with locals by matching them with hosts based 
                on shared interests.</div>
            </div>
            <div class="faq-question">
            <input id="q2" type="checkbox" class="panel"></input>
            <div class="plus">+</div>
            <label for="q2" class="panel-title">How does EmbarkLocal work?</label>
            <div class="panel-content">Travelers can browse the profiles of hosts who share 
                their interests and select a host to connect with. They can then book an experience 
                or activity with their host and get ready to explore the city and culture like a local.</div>
            </div>
            <div class="faq-question">
            <input id="q3" type="checkbox" class="panel"></input>
            <div class="plus">+</div>
            <label for="q3" class="panel-title">Who can become a host on EmbarkLocal?</label>
            <div class="panel-content">Anyone who loves to share their passions, knowledge, and culture can become a 
                host on EmbarkLocal. Whether you're a foodie, an artist, a sports enthusiast, or just love your city, 
                you can become a host and share your love with travelers from around the world.</div>
            </div>
            <div class="faq-question">
            <input id="q4" type="checkbox" class="panel"></input>
            <div class="plus">+</div>
            <label for="q4" class="panel-title">Who can book experiences with EmbarkLocal?</label>
            <div class="panel-content">Anyone who is traveling and looking for a unique and meaningful way to experience the local culture can book experiences with EmbarkLocal. Our platform is designed
                for travelers who want to connect with locals and make their trips more authentic and memorable.</div>
            </div>
    
            <div class="faq-header">Booking</div>
    
            <div class="faq-question">
            <input id="q5" type="checkbox" class="panel"></input>
            <div class="plus">+</div>
            <label for="q5" class="panel-title">How do I book an experience with a host on EmbarkLocal?</label>
            <div class="panel-content">Simply browse the profiles of hosts who share your interests and select the 
                one you want to connect with. You can then book an experience or activity with your host directly on the platform.</div>
            </div>
    
            <div class="faq-question">
                <input id="q6" type="checkbox" class="panel"></input>
                <div class="plus">+</div>
                <label for="q6" class="panel-title">Can I book experiences with multiple hosts?</label>
                <div class="panel-content">Absolutely! We encourage travelers to connect with multiple hosts and 
                    experience different parts of the city and culture. You can book as many experiences as you like with different hosts.</div>
                </div>
            <div class="faq-question">
                    <input id="q7" type="checkbox" class="panel"></input>
                    <div class="plus">+</div>
                    <label for="q7" class="panel-title">What happens if I need to cancel my booking?</label>
                    <div class="panel-content">You can cancel your booking at any time before the experience takes place.
                        Our cancellation policy is designed to be fair to both hosts and travelers. Please refer to our terms
                        and conditions for more information on our cancellation policy.</div>
            </div>
            <div class="faq-question">
                    <input id="q8" type="checkbox" class="panel"></input>
                    <div class="plus">+</div>
                    <label for="q8" class="panel-title">What if I have a problem with my booking?</label>
                    <div class="panel-content">If you have any issues with your booking, please reach out to our customer support
                        team and we will do our best to resolve the issue as quickly as possible.</div>
            </div>
    
            <div class="faq-header">Hosts</div>
    
            <div class="faq-question">
            <input id="q9" type="checkbox" class="panel"></input>
            <div class="plus">+</div>
            <label for="q9" class="panel-title">How do I become a host on EmbarkLocal?</label>
            <div class="panel-content">Becoming a host on EmbarkLocal is easy! Simply sign up and create a
                profile that showcases your passions, skills, and culture. You can then start offering experiences
                and connecting with travelers from around the world.</div>
            </div>
    
            <div class="faq-question">
                <input id="q10" type="checkbox" class="panel"></input>
                <div class="plus">+</div>
                <label for="q10" class="panel-title">What kind of experiences can I offer as a host on EmbarkLocal?</label>
                <div class="panel-content">As a host, you can offer a variety of experiences and activities that showcase your 
                    passions and knowledge of your city. Whether it's a food tour, a surf lesson, a cultural workshop, 
                    or anything in between, you can offer an experience that travelers will love.</div>
                </div>
            <div class="faq-question">
                    <input id="q11" type="checkbox" class="panel"></input>
                    <div class="plus">+</div>
                    <label for="q11" class="panel-title">How do I get paid for hosting an experience on EmbarkLocal?</label>
                    <div class="panel-content">As a host, you will receive payment for your experiences 
                        through our secure platform. The payment will be processed after the experience is completed.</div>
            </div>
            <div class="faq-question">
                    <input id="q12" type="checkbox" class="panel"></input>
                    <div class="plus">+</div>
                    <label for="q12" class="panel-title">What if I need to cancel an experience with a traveler?</label>
                    <div class="panel-content">If you need to cancel an experience with a traveler, please 
                        reach out to our customer support team as soon as possible. We will do our best to find a resolution 
                        that is fair to both you and the traveler.</div>
            </div>
        </div>
    </div>
    )
  }


export default FAQPage;