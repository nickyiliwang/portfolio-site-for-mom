import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, Button } from "@material-ui/core";

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
    effect;
    return () => {
      cleanup;
    };
  }, [input]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("submit", artDetails);
  };

  const handleOnChange = () => {};

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
              type="text"
              defaultValue={artDetails.creationDate}
              onChange={handleOnChange}
            />

            <button onClick={handleSubmit}>Submit</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
