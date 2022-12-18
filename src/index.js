import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 import  firebase from 'firebase/compat/app';
// import getFirestore from '@firebase/firestore';



// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGTAfkauzd4IltvRubojvnUTdSeVahkXE",
  authDomain: "cart-c3d26.firebaseapp.com",
  projectId: "cart-c3d26",
  storageBucket: "cart-c3d26.appspot.com",
  messagingSenderId: "401886207058",
  appId: "1:401886207058:web:1c70d4bd21a4780f84138b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


 ReactDOM.render(<App /> ,document.getElementById('root'));

// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App />);
