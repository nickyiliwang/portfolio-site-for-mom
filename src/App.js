import React, { useEffect } from "react";
import "./App.css";
import "./setup.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UploadPage from "./pages/UploadPage/UploadPage";
// Component
import Header from "./components/Header/Header";
//auth
import { auth } from "./util/firebaseApp";
// firebase
import { firestore } from "./util/firebaseApp";

const App = () => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const uid = user.uid;

        const profileDbRef = firestore.collection("userProfile").doc(uid);

        profileDbRef.get().then((doc) => {
          if (!doc.exists) {
            profileDbRef.set({
              userName: displayName,
              uid: uid,
              photoURL: photoURL,
              description: "",
              creationDate: Date.now(),
            });
          }
        });
      }
    });
  }, []);

  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/upload">
            <UploadPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
