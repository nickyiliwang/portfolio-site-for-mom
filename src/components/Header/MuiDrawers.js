import React, { useState } from "react";
// firebase
import "firebase/auth";
// router
import { NavLink } from "react-router-dom";
// mui
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// mui icons
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import HomeIcon from "@material-ui/icons/Home";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import WarningIcon from "@material-ui/icons/Warning";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
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
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  // renders the always appearing list of nav icon buttons
  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <IconButton onClick={toggleDrawer(side, false)}>
        <ChevronRightIcon />
      </IconButton>
      <List>
        <ListItem button key="Home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <NavLink to="/">
            <ListItemText primary="Home" className={classes.listItemText} />
          </NavLink>
        </ListItem>

        <ListItem button key="Upload">
          <ListItemIcon>
            <CloudUploadIcon />
          </ListItemIcon>
          <NavLink to="/upload">
            <ListItemText primary="Upload" className={classes.listItemText} />
          </NavLink>
        </ListItem>

        <ListItem button key="Login">
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
          <NavLink to="/login">
            <ListItemText primary="Login" className={classes.listItemText} />
          </NavLink>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* Logo */}
          <Tooltip title="Navigation">
            <Button
              className={classes.icon}
              onClick={toggleDrawer("left", true)}
            ></Button>
          </Tooltip>
          {/* nav */}
          <Tooltip title="Navigation">
            <Button onClick={toggleDrawer("left", true)}>
              <MenuIcon />
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
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {sideList("left")}
      </Drawer>
    </div>
  );
}

export default MuiDrawer;
