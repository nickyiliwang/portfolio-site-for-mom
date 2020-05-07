import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "../../util/firebaseApp";

const FirebaseAuth = () => {
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/signedIn",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <div>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default FirebaseAuth;
