import React, { useState } from "react";
// firebase
import "firebase/auth";
// router
import { NavLink } from "react-router-dom";
// mui
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// mui icons
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import HomeIcon from "@material-ui/icons/Home";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import PermIdentity from "@material-ui/icons/PermIdentity";
import HowToVote from "@material-ui/icons/HowToVote";
import Ballot from "@material-ui/icons/Ballot";
import Tooltip from "@material-ui/core/Tooltip";

// mui
const useStyles = makeStyles((theme) => ({
  list: {
    width: "250px",
    overflow: "hidden",
  },
  fullList: {
    width: "auto",
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
}));

// router active style
const activeStyleConfig = {
  borderBottom: "3px solid #ff1654",
  width: "60%",
  overflow: "hidden",
};

function MuiDrawer(props) {
  const classes = useStyles();
  // react hooks
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
        <ListItem button key="User Profile">
          <ListItemIcon>
            <PermIdentity />
          </ListItemIcon>
          <NavLink activeStyle={activeStyleConfig} to="/user">
            <ListItemText
              primary="User Profile"
              className={classes.listItemText}
            />
          </NavLink>
        </ListItem>

        <ListItem button key="Chonder">
          <ListItemIcon>
            <HowToVote />
          </ListItemIcon>
          <NavLink activeStyle={activeStyleConfig} to="/chonder">
            <ListItemText primary="Chonder" className={classes.listItemText} />
          </NavLink>
        </ListItem>

        <ListItem button key="Hall of Chonks">
          <ListItemIcon>
            <Ballot />
          </ListItemIcon>
          <NavLink activeStyle={activeStyleConfig} to="/hall">
            <ListItemText
              primary="Hall of Chonks"
              className={classes.listItemText}
            />
          </NavLink>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="wrapper">
      <>
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
        {/* Login */}
        <Tooltip title="Login">
          <Button component={NavLink} to="/login">
            <LockOpenIcon />
          </Button>
        </Tooltip>
      </>

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
