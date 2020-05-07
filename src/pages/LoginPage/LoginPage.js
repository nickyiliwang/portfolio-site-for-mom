import React from "react";
import FirebaseAuth from "../../components/FirebaseAuth/FirebaseAuth";
import { auth } from "../../util/firebaseApp";

const LoginPage = () => {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;

      console.log(displayName, email, emailVerified, photoURL, uid);

      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
  return (
    <div className="login">
      <h2>LoginPage</h2>
      <FirebaseAuth />

      <div className="signUp"></div>
    </div>
  );
};

export default LoginPage;
