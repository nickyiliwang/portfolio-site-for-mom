import React from "react";

// renders the always appearing list of nav icon buttons
export const sideList = (side) => (
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
