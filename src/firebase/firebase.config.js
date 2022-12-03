// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNpN-_kDCvOE4VTF1AKJ6kDPa8L5TaTtE",
  authDomain: "ema-john-simple-auth-fb0d3.firebaseapp.com",
  projectId: "ema-john-simple-auth-fb0d3",
  storageBucket: "ema-john-simple-auth-fb0d3.appspot.com",
  messagingSenderId: "110532859065",
  appId: "1:110532859065:web:5eb7c21bf3780e5e7ab768"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;