import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, IconButton } from "@material-ui/core";
// import firebase, { firestore } from "../../../../util/firebaseApp";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function EditProfileImage() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newArtDetails, setNewArtDetails] = useState({});

  const userId = true;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("clicked");
    // const artworkDbRef = firestore.collection("artwork").doc(userId);
    // const artWorkToRemove = { ...props };
    // artworkDbRef
    //   .update({
    //     items: firebase.firestore.FieldValue.arrayRemove(artWorkToRemove),
    //   })
    //   .then(
    //     artworkDbRef
    //       .update({
    //         items: firebase.firestore.FieldValue.arrayUnion(newArtDetails),
    //       })
    //       .catch((err) => console.error(err))
    //   )
    //   .catch(function (error) {
    //     console.error("Error adding document: ", error);
    //   });

    setOpen(false);
  };

  const handleOnChange = (e) => {
    setNewArtDetails({ ...newArtDetails, [e.target.name]: e.target.value });
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
          <div className={classes.paper}>
            <form
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            ></form>
          </div>
        </Fade>
      </Modal>
    );
  };

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="upload picture"
        onClick={handleOpen}
      >
        <EditIcon />
      </IconButton>
      {userId && renderModal()}
    </div>
  );
}
