import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, IconButton } from "@material-ui/core";
// import firebase, { firestore } from "../../../../util/firebaseApp";
import EditIcon from "@material-ui/icons/Edit";
import { StyledEditProfileBtn } from "../../HomePageStyles";

const useStyles = makeStyles((theme) => ({
  editBtnContainer: {
    display: "block",
    zIndex: 5,
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
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
  editBtn: {
    height: "44px",
    width: "44px",
    position: "absolute",
    left: "50%",
    right: "50%",
    transform: "translate(-50%, -50%)",
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
    <div className={classes.editBtnContainer}>
      <IconButton
        color="primary"
        aria-label="upload picture"
        onClick={handleOpen}
        className={classes.editBtn}
      >
        <EditIcon />
      </IconButton>
      {userId && renderModal()}
    </div>
  );
}
