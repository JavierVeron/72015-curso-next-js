// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6vOuvsEv-SnJ5usDoGIpiy6FQpL_xkXY",
  authDomain: "coderhouse-72015.firebaseapp.com",
  projectId: "coderhouse-72015",
  storageBucket: "coderhouse-72015.firebasestorage.app",
  messagingSenderId: "586921301634",
  appId: "1:586921301634:web:10547b77f50e799127469b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);