import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./onAuthStateChanged";

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={() =>
        // some reason, even though the authenticated, it's null first then populate with user infos
        auth.user === null || auth.user ? children : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
