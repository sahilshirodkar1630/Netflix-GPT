// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtHVJtw_EsFZleO2QPAa9-CjNYkw2V7aE",
  authDomain: "netflixgpt-82338.firebaseapp.com",
  projectId: "netflixgpt-82338",
  storageBucket: "netflixgpt-82338.firebasestorage.app",
  messagingSenderId: "309024548351",
  appId: "1:309024548351:web:28f25fbdc26cfa83df73ca",
  measurementId: "G-XMQNJM9BY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
