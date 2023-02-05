import { useRef } from 'react';
import {db} from './firebase'
import {collection, addDoc} from 'firebase/firestore'

const addProfile = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        firstName: "", //text
        lastName: "", //text
        email: "hgjhjg", // text
        preference: false, //radio
        password: "afds", // text 
        bio: "fdasa", // text 
        loc: "afsdasd", // dropdown
        applied: [], 
      })
    } catch (err) {
      alert(err)
    }
  }
  

return (
    <div className="App">
        <form onSubmit={addProfile}>
            <label for="firstName">First Name</label>
            <input type= "text" id="firstName" name="firstName" placeholder="Your name..."></input>

            <label for="lastName">Last Name</label>
            <input type= "text" id="lastName" name="lastName" placeholder="Your last name..."></input>

            <label for="email">Email</label>
            <input type= "text" id="email" name="email" placeholder="Your email"></input>

            <label for="password">Password</label>
            <input type= "text" id="password" name="password" placeholder="Enter Password"></input>

            <label for="bio">Bio</label>
            <input type= "text" id="bio" name="bio" placeholder="Tell us about yourself"></input>

            <label for="preference">Preference</label>
            <label for="preference">
                <input type="radio"
                       id="perference"
                       name="preference"
                       value="1">Host</input>
            </label>
            <label for="preference">
                <input type="radio"
                       id="preference"
                       name="preference"
                       value="0">Tourist</input>
            </label>


            <label for="loc">Location</label>
            <select id="loc" name="loc">
              <option value="Las Vegas, Nevada">Las Vegas, Nevada</option>
              <option value="Los Angeles, California">Los Angeles, California</option>
              <option value="Madrid, Spain">Madrid, Spain</option>
              <option value="Melbourne, Australia">Melbourne, Australia</option>
              <option value="New York City, New York">New York City, New York</option>
              <option value="Rio de Janeiro, Brazil">Rio de Janeiro, Brazil</option>
              <option value="Other">Other</option>
            </select>

            <button type = "submit">Save</button>
        </form>
    </div>
);



// }

// export default Add;