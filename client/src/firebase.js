// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-finally-finally.firebaseapp.com",
  projectId: "mern-estate-finally-finally",
  storageBucket: "mern-estate-finally-finally.appspot.com",
  messagingSenderId: "257121305132",
  appId: "1:257121305132:web:85dd0450705e8687778789"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);