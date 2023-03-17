// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// This data is fake; you have to replace it with your own data
const firebaseConfig = {
  apiKey: "TIvaSyCdCU8caJSOYqljn5jMqjtdsPZZBqGZnGY",
  authDomain: "example.firebaseapp.com",
  projectId: "example",
  storageBucket: "example.appspot.com",
  messagingSenderId: "363964760221",
  appId: "1:317964863226:web:a2469f26d9572f0d6261db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);