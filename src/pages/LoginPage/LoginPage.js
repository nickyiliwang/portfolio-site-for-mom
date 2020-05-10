import React from "react";
import FirebaseAuth from "../../components/FirebaseAuth/FirebaseAuth";

const LoginPage = () => {
  return (
    <div className="login">
      <h2>LoginPage</h2>
      <FirebaseAuth />

      <div className="signUp"></div>
    </div>
  );
};

export default LoginPage;
