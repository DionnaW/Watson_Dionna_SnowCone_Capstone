// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAXKhXLOoZMq9yiDy4z26an0yDEvQuyJs",
  authDomain: "deez-cold-ones-adf7c.firebaseapp.com",
  projectId: "deez-cold-ones-adf7c",
  storageBucket: "deez-cold-ones-adf7c.appspot.com",
  messagingSenderId: "587164982047",
  appId: "1:587164982047:web:9d3a725bf247a311feee2a",
  measurementId: "G-Y3S45YH4YJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);