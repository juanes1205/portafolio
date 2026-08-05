// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2rNb4-K1G9XRcxYPkpGG_2DO9UcXL0_M",
    authDomain: "portafolio-ad3d5.firebaseapp.com",
    projectId: "portafolio-ad3d5",
    storageBucket: "portafolio-ad3d5.firebasestorage.app",
    messagingSenderId: "574705724444",
    appId: "1:574705724444:web:b2c00bef6d29c1b4c003d9",
    measurementId: "G-LRC804D1CE"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

