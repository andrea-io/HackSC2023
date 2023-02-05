import { useRef } from 'react';
import {db} from './firebase'
import {collection, addDoc} from 'firebase/firestore'
import './register.css'
import reportWebVitals from './reportWebVitals';
import {useState, useEffect} from 'react'
import {BrowserRouter, Route, Link } from "react-router-dom";

const RegisterPage = () => {

const[fName,setfName] = useState('')
const[lName,setlName] = useState('')
const[getEmail,setEmail] = useState('')
const[getBio,setBio] = useState('')
const[getPassword,setPassword] = useState('')
const[getLocation,setLocation] = useState('')
const[getPreference,setPreference] = useState('')

const addProfile = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'profiles'), {
        firstName: fName, //text
        lastName: lName, //text
        email: getEmail, // text
        preference: getPreference, //true means host
        password: getPassword, // text 
        bio: getBio, // text 
        loc: getLocation, // dropdown
        applied: [],
        imgsrc: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" 
      })
    } catch (err) {
      alert(err)
    }
  }
  
return (
    <div class ="app">
      <div id = "nav-section">
          <ul id="navbar">
          <li><a href="">Home</a></li>
            <li>
            <Link to = "/RegisterPage"><a id = "active-nav" href="">Register</a></Link>
            <ul>
            </ul>
          </li>
          <li><Link to = "/LoginPage"><a href = "">Log In</a></Link></li>
          <li><Link to = "/FAQPage"><a href = "">FAQ</a></Link></li>
          </ul>
        </div>
        <form onSubmit={addProfile}>
            <label for="firstName">First Name</label>
            <input type= "text" id="firstName" name="firstName" placeholder="Your name..." onChange={(e) => setfName(e.target.value)} value = {fName} ></input>

            <label for="lastName">Last Name</label>
            <input type= "text" id="lastName" name="lastName" placeholder="Your last name..."  onChange={(e) => setlName(e.target.value)} value = {lName} ></input>

            <label for="email">Email</label>
            <input type= "text" id="email" name="email" placeholder="Your email"  onChange={(e) => setEmail(e.target.value)} value = {getEmail} ></input>

            <label for="password">Password</label>
            <input type= "text" id="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value = {getPassword} ></input>

            <label for="bio">Bio</label>
            <input type= "text" id="bio" name="bio" placeholder="Tell us about yourself" onChange={(e) => setBio(e.target.value)} value = {getBio} ></input>

            <label for="preference">Preference</label>
            
                <input type="radio"
                       id="host"
                       name="host"
                       onChange={(e) => setPreference(true)} ></input>
                <label for="host">Host</label><br></br>
            
                <input type="radio"
                       id="tourist"
                       name="tourist"
                       onChange={(e) => setPreference(false)} ></input>
            <label for="tourist">Tourist</label>


            <label for="loc">Location</label>
            <select id="loc" name="loc" onChange={(e) => setLocation(e.target.value)}>
              <option value="Las Vegas, Nevada" >Las Vegas, Nevada</option>
              <option value="Los Angeles, California" >Los Angeles, California</option>
              <option value="Madrid, Spain" >Madrid, Spain</option>
              <option value="Melbourne, Australia">Melbourne, Australia</option>
              <option value="New York City, New York" >New York City, New York</option>
              <option value="Rio de Janeiro, Brazil" >Rio de Janeiro, Brazil</option>
              <option value="Other">Other</option>
            </select>

            <Link to = "/dashPage"><button type = "submit">Register</button></Link>
        </form>
    </div>
);
}

export default RegisterPage;