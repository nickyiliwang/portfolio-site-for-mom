import React from "react";
import "./App.css";
import { Reset } from "styled-reset";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import PublicPage from "./pages/PublicPage/PublicPage";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import Header from "./components/Header/Header";
import { ProvideAuth } from "./util/onAuthStateChanged";
import PrivateRoute from "./util/PrivateRoute";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <ProvideAuth>
      <Reset />
      <Router>
        <Header />
        <Switch>
          <PrivateRoute exact path="/">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute exact path="/upload">
            <UploadPage />
          </PrivateRoute>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path={`/user/:userId`} component={PublicPage} />
        </Switch>
      </Router>
      <Footer />
    </ProvideAuth>
  );
};

export default App;
