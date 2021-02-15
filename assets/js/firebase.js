import firebase from "firebase/app";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyPPoscxZwMYdLe5vz7lGut_9Xlv550fc",
    authDomain: "scrapyio-9aec3.firebaseapp.com",
    databaseURL: "https://scrapyio-9aec3.firebaseio.com",
    projectId: "scrapyio-9aec3",
    storageBucket: "scrapyio-9aec3.appspot.com",
    messagingSenderId: "615929764476",
    appId: "1:615929764476:web:dd5ce6a691f3735ca5c7f9",
    measurementId: "G-MJXM8SNV52"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();