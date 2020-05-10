import React, { useState } from "react";
import "./App.css";
import "./setup.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { Header } from "./components/Header/Header";
//auth
import { auth } from "./util/firebaseApp";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const uid = user.uid;
      const providerData = user.providerData;
      setIsSignedIn(true);
      setUserData(providerData);

      // ...
    } else {
      setUserData(null);
      setIsSignedIn(false);
    }
  });

  return (
    <div className="wrapper">
      <Router>
        <Header isSignedIn={isSignedIn} userData={userData} />
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
