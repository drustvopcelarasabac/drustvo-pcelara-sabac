import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCibIPmtq8Epq97yP6UxuhZR5YPcI6nk1w",
    authDomain: "drustvo-pcelara-sabac-dcf6a.firebaseapp.com",
    databaseURL: "https://drustvo-pcelara-sabac-dcf6a.firebaseio.com",
    projectId: "drustvo-pcelara-sabac-dcf6a",
    storageBucket: "drustvo-pcelara-sabac-dcf6a.appspot.com",
    messagingSenderId: "618004375702",
    appId: "1:618004375702:web:88223adeed5dcd756a3ab7",
    measurementId: "G-3P1B1HGQR6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
