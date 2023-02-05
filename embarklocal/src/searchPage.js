import React from 'react';
import ReactDOM from 'react-dom/client';
import './searchPage.css';
import reportWebVitals from './reportWebVitals';
import {useState, useEffect} from 'react'
import {collection, query, where, onSnapshot} from "firebase/firestore"
import {db} from './firebase'
import {BrowserRouter, Route, Link, useLocation } from "react-router-dom";
import Profile from './profile';
import SearchImg from './search.png'

const SearchPage = () => {
    const {state} = useLocation();
    const [profile, setProfile] = useState([])
    console.log(state)
    useEffect(() => {
      const q = query(collection(db, 'profiles'), where("preference","==",!state.pref))
      onSnapshot(q, (querySnapshot) => {
        setProfile(querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
    },[])

    const Update = async (e)=>{
        e.preventDefault();
        setProfile([])
        try{
            const q = query(collection(db, 'profiles'), where("preference","==",!state.pref))
            onSnapshot(q, (querySnapshot) => {
              setProfile(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
              })))
            })
        }
        catch(err){
            alert(err)
        }

    }
    return(
    <div id = "parent">
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
      <div class="filter">
        <h1>Filter</h1>
            <h2>Length of Stay</h2>
                <label class="container">Longterm Stay
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                </label>
                <label class="container">Day Excursion
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                </label>
      </div>
    <div class="main">
        <div class = "search">
            <h1>Where do you want to go?</h1>
            <div class = "search-bar-container">
                <form onSubmit={Update} class = "search-bar">
                    <input type = "text" placeholder="Enter your travel location" name = "search"></input>
                    <button type = "submit"><img src = {SearchImg} alt = "search-icon"></img></button>
                </form>
            </div>
        </div>
        {
            profile.map((prof)=>(
              <Link to = {{pathname:"/ProfilePage"}}state = {prof.data}>
                <Profile 
                    imgsrc = {prof.data.imgsrc}
                    firstName = {prof.data.firstName}
                    lastName = {prof.data.lastName}
                    bio = {prof.data.bio}
                    location = {prof.data.loc}
                />
                </Link>
            ))
        }
      </div>
      </div>
    ) 
}

export default SearchPage;
