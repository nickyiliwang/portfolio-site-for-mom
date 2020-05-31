import React from "react";
import "firebase/auth";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Tooltip, Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import HomeIcon from "@material-ui/icons/Home";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import WarningIcon from "@material-ui/icons/Warning";
import { useStyles } from "./MuiDrawersStyles";
import { useAuth } from "../../util/onAuthStateChanged";

function MuiDrawer() {
  const auth = useAuth();
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {/* Logo */}
        <Tooltip title="">
          <Button className={classes.icon} component={NavLink} to="/">
            .
          </Button>
        </Tooltip>
        {/* Home */}
        <Tooltip title="Home">
          <Button component={NavLink} to="/">
            <HomeIcon />
          </Button>
        </Tooltip>
        {/* Upload */}
        <Tooltip title="Upload">
          <Button component={NavLink} to="/upload">
            <CloudUploadIcon />
          </Button>
        </Tooltip>
        {auth.user ? (
          <Tooltip title="Logout">
            <Button
              onClick={() => auth.signout()}
              component={NavLink}
              to="/login"
            >
              <WarningIcon />
            </Button>
          </Tooltip>
        ) : (
          <Tooltip title="Login">
            <Button component={NavLink} to="/login">
              <LockOpenIcon />
            </Button>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default MuiDrawer;
