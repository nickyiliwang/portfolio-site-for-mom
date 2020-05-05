import React from "react";

const LoginPage = () => (
  <div className="login">
    <h2>LoginPage</h2>
    <div className="login-container">
      <p>User login</p>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" />

      <label htmlFor="password">password</label>
      <input type="password" name="password" />
    </div>
    <div className="federation">
      <button>Google</button>
      <button>Email</button>
    </div>
  <div className='signUp'>
  
  </div>
  </div>
);

export default LoginPage;
