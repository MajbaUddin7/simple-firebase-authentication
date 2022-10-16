// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDenma4eIt5Z3DnKbiZG735yeujSkwfttU",
    authDomain: "simple-firebase-authenti-4c2fe.firebaseapp.com",
    projectId: "simple-firebase-authenti-4c2fe",
    storageBucket: "simple-firebase-authenti-4c2fe.appspot.com",
    messagingSenderId: "130194485272",
    appId: "1:130194485272:web:5e4d86d3413e98acee136d",
    measurementId: "G-VTJXZTE3NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app

