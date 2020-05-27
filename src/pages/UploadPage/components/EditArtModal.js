import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Backdrop,
  Fade,
  Button,
  Grid,
  TextField,
  IconButton,
} from "@material-ui/core";
import firebase, { firestore } from "../../../util/firebaseApp";
import moment from "moment";
import BrushIcon from "@material-ui/icons/Brush";
import DescriptionIcon from "@material-ui/icons/Description";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  media: {
    height: 140,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    position: "relative",
  },
  margin: {
    margin: theme.spacing(5),
  },
  submitBtn: {
    marginTop: "20px",
  },
  imageContainer: {
    width: "300px",
    maxHeight: "300px",
    overflow: "hidden",
    marginBottom: 30,
  },
  img: {
    borderRadius: "3px",
  },
  closeBtn: {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));

export default function IndividualArtModal({ userId, ...props }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newArtDetails, setNewArtDetails] = useState(props);
  const { title, description, creationDate, imageUrl } = props;
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          style={{ marginRight: "8px" }}
        >
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
              <IconButton
                aria-label="Close"
                onClick={handleClose}
                className={classes.closeBtn}
              >
                <CancelIcon />
              </IconButton>
              <form
                action="#"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className={classes.margin}>
                  <Grid container>
                    <Grid item className={classes.imageContainer}>
                      <img
                        style={{
                          width: "100%",
                          objectFit: "cover",
                        }}
                        src={imageUrl}
                        alt={title}
                        className={classes.img}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <BrushIcon />
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Edit Title"
                        name="title"
                        type="text"
                        defaultValue={title}
                        onChange={handleOnChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <DescriptionIcon />
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Edit Description"
                        name="description"
                        type="text"
                        defaultValue={description}
                        onChange={handleOnChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <CalendarTodayIcon />
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Edit Creation Date"
                        name="creationDate"
                        type="Date"
                        defaultValue={moment(creationDate).format("YYYY-MM-DD")}
                        onChange={handleOnChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={handleSubmit}
                        className={classes.submitBtn}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </form>
            </div>
          </Fade>
        </Modal>
      </>
    );
  };

  return <div>{userId && renderButtonAndModal()}</div>;
}
