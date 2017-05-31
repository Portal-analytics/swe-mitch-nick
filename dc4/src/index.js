import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

let database

export const init = () => {
  let config = {
    apiKey: "AIzaSyAfueo83UF2FqlxXIfzl_tJo8T3W4lBb3I",
    authDomain: "daily-challenge-6.firebaseapp.com",
    databaseURL: "https://daily-challenge-6.firebaseio.com",
    projectId: "daily-challenge-6",
    storageBucket: "daily-challenge-6.appspot.com",
    messagingSenderId: "211076160675"
  };
  firebase.initializeApp(config);
  database = firebase.database()
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
