// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";    
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9HSTErh5yHOM1ZEAuyYTVnK3uPK-fW54",
  authDomain: "final-year-project-lyart.firebaseapp.com",
  projectId: "final-year-project-lyart",
  storageBucket: "final-year-project-lyart.firebasestorage.app",
  messagingSenderId: "149306008838",
  appId: "1:149306008838:web:86f0691cb1538df9266a87",
  measurementId: "G-HBHVTTCK3W"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
