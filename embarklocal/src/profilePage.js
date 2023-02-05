import React from 'react';
import ReactDOM from 'react-dom/client';
import './profilePage.css';
import reportWebVitals from './reportWebVitals';
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './firebase'
import {BrowserRouter, Route, Link } from "react-router-dom";
import Profile from './profile';

const ProfilePage = () => {
    return(
        <div class = "parent">
            <div id = "profilePhoto"><img src = "https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></img></div>
            <div id = "userName">
                <h1>Ana Silva</h1>
                <p class = "tripLength">Willing to embark for 10 days</p>
                <p class = "location">Rio de Janeiro, Brazil</p>
                <p>I am a baddie from Brazil</p>
            </div>
        </div>
    ) 
}

export default ProfilePage;
