// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyA3QaPQGkDdabUYoDTf3TpOhdv6WrcOXkM",
  authDomain: "netflixclone-15ef3.firebaseapp.com",
  projectId: "netflixclone-15ef3",
  storageBucket: "netflixclone-15ef3.appspot.com", 
  messagingSenderId: "667887068289",
  appId: "1:667887068289:web:5348fc53b16780beb09980",
  measurementId: "G-N45LTRT6NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
