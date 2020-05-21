import React, { useState, useEffect, useContext, createContext } from "react";
import firebase, { firestore } from "../util/firebaseApp";
import { v4 as uuidv4 } from "uuid";

// react context api
const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        const uid = user.uid;
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const profileDbRef = firestore.collection("userProfile").doc(uid);

        profileDbRef.get().then((doc) => {
          if (!doc.exists) {
            profileDbRef.set({
              userName: displayName,
              uid: uid,
              photoURL: photoURL,
              description: "",
              creationDate: Date.now(),
              idHandle: uuidv4(),
              website: "",
            });
          }
        });
      } else {
        setUser(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signout,
  };
}
