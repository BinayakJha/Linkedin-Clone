import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBr_KqF_rgQM2QUxSioKWgtPGCJtJZdHUM",
    authDomain: "linkedin-clone-4d6ea.firebaseapp.com",
    projectId: "linkedin-clone-4d6ea",
    storageBucket: "linkedin-clone-4d6ea.appspot.com",
    messagingSenderId: "375590836527",
    appId: "1:375590836527:web:c6cb8caca169a8281569da",
    measurementId: "G-XXSGQ1B04N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };