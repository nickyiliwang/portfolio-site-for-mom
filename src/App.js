import React from "react";
import "./App.css";
import "./setup.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { Header } from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={mainPage} />
        <Route exact path="/upload" component={uploadPage} />
        <Route exact path="/login" component={signInSignUp} />
      </Switch>
    </Router>
  );
};

export default App;
