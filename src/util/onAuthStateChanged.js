import React, { useState, useEffect } from "react";
//auth
import { auth } from "../util/firebaseApp";

export const withAuthSubscription = (WrappedComponent) => (props) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });

    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, [isSignedIn]);

  return (
    <WrappedComponent
      isSignedIn={isSignedIn}
      signOut={() => auth.signOut()}
      {...props}
    />
  );
};
