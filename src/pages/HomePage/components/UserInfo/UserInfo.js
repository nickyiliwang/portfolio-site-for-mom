import React, { useState, useEffect } from "react";
import { StyledUserInfo, Username } from "./UserInfoStyles";
import { Button } from "@material-ui/core";
import moment from "moment";
import {
  Modal,
  Backdrop,
  Fade,
  IconButton,
  Paper,
  Tooltip,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { useStyles } from "./UserInfoStyles";
import { useAuth } from "../../../../util/onAuthStateChanged";
import EditUserInfoModal from "./EditUserInfoModal/EditUserInfoModal";

export default function UserInfo({ userDataFromDB }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [userId, setUserId] = useState(null);
  const auth = useAuth();
  const {
    userName = "",
    description = "",
    website,
    creationDate,
  } = userDataFromDB;

  useEffect(() => {
    if (auth.user) {
      setUserId(auth.user.uid);
    }
  }, [auth]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderModal = () => {
    return (
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <IconButton
              aria-label="Close"
              onClick={handleClose}
              className={classes.closeBtn}
            >
              <CancelIcon />
            </IconButton>
            <EditUserInfoModal
              userId={userId}
              userDataFromDB={userDataFromDB}
              handleClose={handleClose}
            />
          </Paper>
        </Fade>
      </Modal>
    );
  };

  return (
    <StyledUserInfo>
      <Username>
        <h2>{userName}</h2>
        <Tooltip title="Edit your bio">
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Edit
          </Button>
        </Tooltip>
      </Username>
      <p>{`Joined: ${moment(creationDate).fromNow()}`}</p>
      <p>{`Description: ${
        description === "" ? "Tell the world about yourself!" : description
      }`}</p>
      <a
        href={website ? website : "http://www.google.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {website === "" ? "https://www.MyWebsite.com" : website}
      </a>
      {renderModal()}
    </StyledUserInfo>
  );
}
