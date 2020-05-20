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
import PrivateRoute from "./util/PrivateRoute";

const App = () => {
  return (
    <div className="wrapper">
      <ProvideAuth>
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
          </Switch>
        </Router>
      </ProvideAuth>
    </div>
  );
};

export default App;
