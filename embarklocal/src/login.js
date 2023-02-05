import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB-sIxe0EbEN8_hRPUPRsQMwsHLKFyglcw",
    authDomain: "embarklocal.firebaseapp.com",
    projectId: "embarklocal",
    storageBucket: "embarklocal.appspot.com",
    messagingSenderId: "750107102622",
    appId: "1:750107102622:web:2702315f2387271038da8f",
    measurementId: "G-C84TWJWVG0"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);