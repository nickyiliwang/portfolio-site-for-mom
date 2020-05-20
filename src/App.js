import React from "react";
import "./App.css";
import "./setup.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UploadPage from "./pages/UploadPage/UploadPage";
// Component
import Header from "./components/Header/Header";
import { ProvideAuth } from "./util/onAuthStateChanged";

const App = () => {
  return (
    <div className="wrapper">
      <ProvideAuth>
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
      </ProvideAuth>
    </div>
  );
};

export default App;
