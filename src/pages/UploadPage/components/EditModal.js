import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, Button } from "@material-ui/core";
import firebase, { firestore } from "../../../util/firebaseApp";
import moment from "moment";

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

export default function IndividualArtModal({ userId, ...props }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newArtDetails, setNewArtDetails] = useState(null);
  const { title, description, creationDate } = props;


  // this is causing infinite loooooooooop
  useEffect(() => {
    function doSomething() {
      setNewArtDetails(props);
    }

    // doSomething();
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const artworkDbRef = firestore.collection("artwork").doc(userId);
    const artWorkToRemove = { ...props };
    artworkDbRef
      .update({
        items: firebase.firestore.FieldValue.arrayRemove(artWorkToRemove),
      })
      .then(
        artworkDbRef
          .update({
            items: firebase.firestore.FieldValue.arrayUnion(newArtDetails),
          })
          .catch((err) => console.error(err))
      )
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    setOpen(false);
  };

  const handleOnChange = (e) => {
    setNewArtDetails({ ...newArtDetails, [e.target.name]: e.target.value });
  };

  const renderButtonAndModal = () => {
    return (
      <>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Edit
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
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
              >
                <p>Edit Title</p>
                <input
                  name="title"
                  type="text"
                  defaultValue={title}
                  onChange={handleOnChange}
                />
                <p>Edit Description</p>
                <input
                  name="description"
                  type="text"
                  defaultValue={description}
                  onChange={handleOnChange}
                />
                <p>Edit Creation Date</p>
                <input
                  name="creationDate"
                  type="Date"
                  defaultValue={moment(creationDate).format("YYYY-MM-DD")}
                  onChange={handleOnChange}
                />

                <button type="submit" onClick={handleSubmit}>
                  Submit
                </button>
              </form>
            </div>
          </Fade>
        </Modal>
      </>
    );
  };

  return <div>{userId && renderButtonAndModal()}</div>;
}
