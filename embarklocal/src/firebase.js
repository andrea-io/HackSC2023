import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB-sIxe0EbEN8_hRPUPRsQMwsHLKFyglcw",
    authDomain: "embarklocal.firebaseapp.com",
    projectId: "embarklocal",
    storageBucket: "embarklocal.appspot.com",
    messagingSenderId: "750107102622",
    appId: "1:750107102622:web:2702315f2387271038da8f",
    measurementId: "G-C84TWJWVG0"
  };

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}
