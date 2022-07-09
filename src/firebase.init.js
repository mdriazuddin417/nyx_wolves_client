// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXivUM_ME0C59XFJgI0ThAweGM1GjZSVU",
  authDomain: "nyx-wolves-87d75.firebaseapp.com",
  projectId: "nyx-wolves-87d75",
  storageBucket: "nyx-wolves-87d75.appspot.com",
  messagingSenderId: "185256192726",
  appId: "1:185256192726:web:7d94cdc68d5d3daffc7777",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
