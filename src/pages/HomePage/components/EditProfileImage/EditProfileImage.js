import React, { useState, useEffect } from "react";
// MUI
import {
  Modal,
  Backdrop,
  Fade,
  IconButton,
  Paper,
  Tooltip,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import { useStyles } from "./EditProfileImageStyles";
// components
import ProfilePictureDropZone from "./ProfilePictureDropZone";
import { useAuth } from "../../../../util/onAuthStateChanged";

export default function EditProfileImage() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const auth = useAuth();

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
            <ProfilePictureDropZone userId={userId} />
          </Paper>
        </Fade>
      </Modal>
    );
  };

  return (
    <div className={classes.editBtnContainer}>
      <Tooltip title="Edit Profile Picture">
        <IconButton
          color="primary"
          aria-label="upload picture"
          onClick={handleOpen}
          className={classes.editBtn}
          disableFocusRipple
          disableRipple
          focusRipple={false}
          disableTouchRipple
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      {renderModal()}
    </div>
  );
}
