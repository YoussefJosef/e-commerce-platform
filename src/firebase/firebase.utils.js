import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const config =  {
    apiKey: "AIzaSyDqICbG9zRjv4NkXcQsVWa7cGFmNkd0D5o",
    authDomain: "e-commerce-db-95199.firebaseapp.com",
    projectId: "e-commerce-db-95199",
    storageBucket: "e-commerce-db-95199.appspot.com",
    messagingSenderId: "1094494426938",
    appId: "1:1094494426938:web:1844a004be34e425532203",
    measurementId: "G-23410E2EQH"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
