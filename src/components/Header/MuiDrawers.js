import React from "react";
// firebase
import "firebase/auth";
// router
import { NavLink } from "react-router-dom";
// mui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
// mui icons
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import HomeIcon from "@material-ui/icons/Home";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import WarningIcon from "@material-ui/icons/Warning";
import Tooltip from "@material-ui/core/Tooltip";
// auth
import { useAuth } from "../../util/onAuthStateChanged";
// icon
import Logo from "../../assets/Momstagram Logo.png";

// mui style
const useStyles = makeStyles((theme) => ({
  list: {
    width: "250px",
    overflow: "hidden",
  },
  // these buttons will be aligned to right side of abbBar
  toolbarButtonsRight: {
    [theme.breakpoints.down("335")]: {
      marginLeft: "0",
    },
    [theme.breakpoints.up("335")]: {
      marginLeft: "auto",
    },
  },
  listItemText: {
    color: "#247ba0",
    width: "200px",
  },
  appBar: {
    background: "#ffffff",
    boxShadow: "none",
    borderBottom: "1px solid rgba(var(--b6a,219,219,219),1)",
  },
  icon: {
    background: `url('${Logo}')`,
    backgroundSize: "200px 40px",
    backgroundRepeat: "no-repeat",
    width: "200px",
    height: "40px",
  },
}));

function MuiDrawer() {
  const auth = useAuth();
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* Logo */}
          <Tooltip title="">
            <Button className={classes.icon} component={NavLink} to="/">
              .
            </Button>
          </Tooltip>
          {/* home */}
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
    </div>
  );
}

export default MuiDrawer;
