// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEhKmoC_vCK1jaLZTv5KmBsBXz1OIcppk",
  authDomain: "portfolio-27463.firebaseapp.com",
  projectId: "portfolio-27463",
  storageBucket: "portfolio-27463.firebasestorage.app",
  messagingSenderId: "1001968998745",
  appId: "1:1001968998745:web:2de33a614f8882e6d39448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore reference
const db = getFirestore(app);

export default db;