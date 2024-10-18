// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9HSTErh5yHOM1ZEAuyYTVnK3uPK-fW54",
    authDomain: "final-year-project-lyart.firebaseapp.com",
    projectId: "final-year-project-lyart",
    storageBucket: "final-year-project-lyart.appspot.com",
    messagingSenderId: "149306008838",
    appId: "1:149306008838:web:86f0691cb1538df9266a87",
    measurementId: "G-HBHVTTCK3W"
  };
  
  
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {app, auth}