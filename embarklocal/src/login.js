import { useRef } from 'react';
import {db} from './firebase'
import './login.css'
import {collection, addDoc, where} from 'firebase/firestore'
import useState from 'react'
import {useEffect, query, onSnapshot, addProfile, Link}  from 'react'

const LoginPage = () => {
  const[getEmail,setEmail] = useState('')
  const[getPassword,setPassword] = useState('')
  const[profile,setProfile] = useState([])
  const[errmsg,setErrmsg] = useState("")

  useEffect(() => {
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
  },[])
    
  const accessProfile = async (e) => {
    
  }

  return (
      <div class ="app">
          <form onSubmit={accessProfile}>
              <label for="email">Email</label>
              <input type= "text" id="email" name="email" placeholder="Your email"  onChange={(e) => setEmail(e.target.value)} value = {getEmail} ></input>

              <label for="password">Password</label>
              <input type= "text" id="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value = {getPassword} ></input>

              <button type = "submit">Save</button>
          </form>
          <script>
            if(setErrmsg != "Invalid Email/Password") {
              document.write(<Link to = "/dashPage"></Link>)
            }
          </script>
      </div>
  );
}

export default LoginPage;