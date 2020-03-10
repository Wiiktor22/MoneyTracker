import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyB0IklewJaaJDZsUqJ5--cXHUkSx8Ud0y4",
    authDomain: "moneytracker-28506.firebaseapp.com",
    databaseURL: "https://moneytracker-28506.firebaseio.com",
    projectId: "moneytracker-28506",
    storageBucket: "moneytracker-28506.appspot.com",
    messagingSenderId: "31945960863",
    appId: "1:31945960863:web:3ebfb0fccf7ce68b7c61aa"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;