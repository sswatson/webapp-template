// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdCq8caJSOYOljn5jMqjtdPZZBqGHZnGM",
  authDomain: "relationalai-documentation.firebaseapp.com",
  projectId: "relationalai-documentation",
  storageBucket: "relationalai-documentation.appspot.com",
  messagingSenderId: "367964860226",
  appId: "1:367964860226:web:f2469f26d9172f0d6262db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);