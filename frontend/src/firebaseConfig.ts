import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAeyBAu0jti04v3nDMPXopKdBnm2oOlxQU",
    authDomain: "shout-outs-lab-9b6ac.firebaseapp.com",
    projectId: "shout-outs-lab-9b6ac",
    storageBucket: "shout-outs-lab-9b6ac.appspot.com",
    messagingSenderId: "974786487524",
    appId: "1:974786487524:web:828358ee9f2c93608db8f1",
    measurementId: "G-ST0DPSMYCD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const authProvider = new firebase.auth.GoogleAuthProvider();
  export default firebase;

  export function signInWithGoogle(): void {
      firebase.auth().signInWithPopup(authProvider);
  }

  export function signOut(): void {
      firebase.auth().signOut();
  }