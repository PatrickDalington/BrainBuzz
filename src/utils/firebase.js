


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "brainbuzz-424110.firebaseapp.com",
  projectId: "brainbuzz-424110",
  storageBucket: "brainbuzz-424110.appspot.com",
  messagingSenderId: "61834478225",
  appId: process.env.FIREBASE_API_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

