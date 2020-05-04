import React from "react";
import { Link } from "react-router-dom";
import Drawer from "./MuiDrawers";

export const Header = () => {
  return (
    <div>
      <Drawer />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
