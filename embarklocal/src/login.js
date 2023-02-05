import { useRef } from 'react';
import {db} from './firebase'
import './login.css'
import {collection, addDoc, where} from 'firebase/firestore'
import {useState} from 'react'
import {query, onSnapshot}  from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const[getEmail,setEmail] = useState('')
  const[getPassword,setPassword] = useState('')
  const[profile,setProfile] = useState([])
  const[errmsg,setErrmsg] = useState("")
    
  const accessProfile = async (e) => {
    const q = query(collection(db, 'profiles'), where("email","==",getEmail))
    onSnapshot(q, (querySnapshot) => {
      setProfile(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
      if(profile[0].data.password == getPassword){
        console.log("logged")
      }
      else{
        setErrmsg("Invalid Email/Password!")
      }
    })
  }

  return (
      <div class ="app">
        <div id = "nav-section">
          <ul id="navbar">
          <li><Link to = "/"><a href="">Home</a></Link></li>
            <li>
            <Link to = "/RegisterPage"><a href="">Register</a></Link>
            <ul>
            </ul>
          </li>
          <li><Link to = "/LoginPage"><a id = "active-nav" href = "">Log In</a></Link></li>
          <li><Link to = "/FAQPage"><a href = "">FAQ</a></Link></li>
          </ul>
        </div>
          <form onSubmit={accessProfile}>
              <label for="email">Email</label>
              <input type= "text" id="email" name="email" placeholder="Your email"  onChange={(e) => setEmail(e.target.value)} value = {getEmail} ></input>

              <label for="password">Password</label>
              <input type= "text" id="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value = {getPassword} ></input>

              <button type = "submit">Save</button>
          </form>
      </div>
  );
}

export default LoginPage;