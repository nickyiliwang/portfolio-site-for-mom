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

export default function IndividualArtModal({ artDetails }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newArtDetails, setNewArtDetails] = useState({});

  useEffect(() => {
    setNewArtDetails(artDetails);
  }, [artDetails]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("submit", newArtDetails);
    const userId = `Nick Wang's artwork`;
    const artworkDbRef = firestore.collection("artwork").doc(userId);

    artworkDbRef
      .update({
        items: firebase.firestore.FieldValue.arrayRemove(artDetails),
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
  };

  const handleOnChange = (e) => {
    setNewArtDetails({ ...newArtDetails, [e.target.name]: e.target.value });
  };

  return (
    <div>
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
            <p>Edit Title</p>
            <input
              name="title"
              type="text"
              defaultValue={artDetails.title}
              onChange={handleOnChange}
            />
            <p>Edit Description</p>
            <input
              name="description"
              type="text"
              defaultValue={artDetails.description}
              onChange={handleOnChange}
            />
            <p>Edit Creation Date</p>
            <input
              name="creationDate"
              type="Date"
              defaultValue={moment(artDetails.creationDate).format(
                "YYYY-MM-DD"
              )}
              onChange={handleOnChange}
            />

            <button onClick={handleSubmit}>Submit</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
