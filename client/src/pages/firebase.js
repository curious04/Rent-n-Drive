// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBI2v331zyzbR0KwX5bD1I9xsJ2FK4iYJc",
  authDomain: "rentndrive-31782.firebaseapp.com",
  projectId: "rentndrive-31782",
  storageBucket: "rentndrive-31782.appspot.com",
  messagingSenderId: "111072831116",
  appId: "1:111072831116:web:75a411dafc95487cacfda9",
  measurementId: "G-024VX9DBJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

export {auth, db};