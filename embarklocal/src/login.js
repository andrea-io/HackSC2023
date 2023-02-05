import { useRef } from 'react';
import {db} from './firebase'
import {collection, addDoc} from 'firebase/firestore'

const addProfile = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        name: "",
        email: "hgjhjg",
        preference: false,
        password: "afds",
        bio: "fdasa",
        loc: "afsdasd",
        applied: [],
      })
    } catch (err) {
      alert(err)
    }
  }
  

return (
    <div className="App">
        <form onSubmit={addProfile}>
            <input type= "text" ref={dataRef} />
            <button type = "submit">Save</button>
        </form>
    </div>
);
// }

// export default Add;