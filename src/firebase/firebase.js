// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbt_OYjyluJkM4KJw-YM5L89CfXetObEU",
  authDomain: "jacksonchameleon-beb53.firebaseapp.com",
  projectId: "jacksonchameleon-beb53",
  storageBucket: "jacksonchameleon-beb53.firebasestorage.app",
  messagingSenderId: "350587200625",
  appId: "1:350587200625:web:f47087cf4b6aa52668e7d0",
  measurementId: "G-K1ZLWV868R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);