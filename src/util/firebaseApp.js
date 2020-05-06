import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpXkOZr_H8JmaZtjUm8tsMau70BPbpoQQ",
  authDomain: "portfolio-site-e8245.firebaseapp.com",
  databaseURL: "https://portfolio-site-e8245.firebaseio.com",
  projectId: "portfolio-site-e8245",
  storageBucket: "portfolio-site-e8245.appspot.com",
  messagingSenderId: "680054723703",
  appId: "1:680054723703:web:2cd4cf251d7f365599a272",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
