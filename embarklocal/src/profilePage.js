import React from 'react';
import ReactDOM from 'react-dom/client';
import './profilePage.css';
import reportWebVitals from './reportWebVitals';
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './firebase'
import {BrowserRouter, Route, Link, useLocation } from "react-router-dom";
import Profile from './profile';

const ProfilePage = () => {
    const {state} = useLocation();
    console.log(state)
    return(
        <div class = "parent">
            <div id = "profilePhoto"><img src = {state.imgsrc}></img></div>
            <div id = "userName">
                <h1>{state.firstName} {state.lastName}</h1>
                {/* <p class = "tripLength">Willing to embark for 10 days</p> */}
                <p class = "location">{state.loc}</p>
                <p>{state.bio}</p>
            </div>
            <div id = "messageBox">
                <input type="text"></input>
            </div>
            <div id = "sendMessage">
                <button>Message Host</button>
            </div>
        </div>
    ) 
}

export default ProfilePage;
