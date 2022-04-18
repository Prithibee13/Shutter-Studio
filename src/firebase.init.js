// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWyO_lkV6kNtW-VbjjYNGESaMS1DOsu-M",
  authDomain: "shutter-studio-739ed.firebaseapp.com",
  projectId: "shutter-studio-739ed",
  storageBucket: "shutter-studio-739ed.appspot.com",
  messagingSenderId: "672175253102",
  appId: "1:672175253102:web:49f063f00c3acc2933e87f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;