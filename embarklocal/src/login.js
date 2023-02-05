import { useRef } from 'react';
import {db} from './firebase'
import {collection, addDoc} from 'firebase/firestore'
import useState from 'react'

const LoginPage = () => {

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
    <div className="App">
        <form onSubmit={addProfile}>
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