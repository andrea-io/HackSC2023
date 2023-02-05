import { useRef } from 'react';
import {db} from './firebase'
import {collection, addDoc} from 'firebase/firestore'
import './register.css'
import reportWebVitals from './reportWebVitals';
import {useState, useEffect} from 'react'

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
      })
    } catch (err) {
      alert(err)
    }
  }
  
return (
    <div class ="app">
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
            <label for="preference">
                <input type="radio"
                       id="perference"
                       name="preference"
                       onChange={(e) => setPreference(true)} >Host</input>
            </label>
            <label for="preference">
                <input type="radio"
                       id="preference"
                       name="preference"
                       onChange={(e) => setPreference(false)} >Tourist</input>
            </label>


            <label for="loc">Location</label>
            <select id="loc" name="loc">
              <option value="Las Vegas, Nevada" onChange={(e) => setLocation(e.target.value)} >Las Vegas, Nevada</option>
              <option value="Los Angeles, California" onChange={(e) => setLocation(e.target.value)} >Los Angeles, California</option>
              <option value="Madrid, Spain" onChange={(e) => setLocation(e.target.value)} >Madrid, Spain</option>
              <option value="Melbourne, Australia" onChange={(e) => setLocation(e.target.value)} >Melbourne, Australia</option>
              <option value="New York City, New York" onChange={(e) => setLocation(e.target.value)} >New York City, New York</option>
              <option value="Rio de Janeiro, Brazil" onChange={(e) => setLocation(e.target.value)} >Rio de Janeiro, Brazil</option>
              <option value="Other" onChange={(e) => setLocation(e.target.value)} >Other</option>
            </select>

            <button type = "submit">Save</button>
        </form>
    </div>
);
}

export default RegisterPage;