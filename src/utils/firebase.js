// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_sxgzBddhTeqYtvUFEMjH2VwpkJ-aSIQ",
  authDomain: "periodictable-32313.firebaseapp.com",
  projectId: "periodictable-32313",
  storageBucket: "periodictable-32313.appspot.com",
  messagingSenderId: "518746610982",
  appId: "1:518746610982:web:b22b22e93af97193e935e7",
  measurementId: "G-L5Q19CGG8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);