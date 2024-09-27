// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-c5148.firebaseapp.com",
  projectId: "real-estate-c5148",
  storageBucket: "real-estate-c5148.appspot.com",
  messagingSenderId: "720988502604",
  appId: "1:720988502604:web:2d3443242d6e3d5ad8d2e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
