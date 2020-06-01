import React, { useState, useEffect } from "react";
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
import firebase, { firestore } from "../../../../../util/firebaseApp";
import BrushIcon from "@material-ui/icons/Brush";
import DescriptionIcon from "@material-ui/icons/Description";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import LanguageIcon from "@material-ui/icons/Language";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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

export default function EditUserInfoModal({
  userId,
  userDataFromDB,
  handleClose,
}) {
  const [newUserDetails, setNewUserDetails] = useState(userDataFromDB);
  const classes = useStyles();
  const { userName, description } = userDataFromDB;
  const handleSubmit = () => {
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
    handleClose();
  };

  const handleOnChange = (e) => {
    setNewUserDetails({ ...newUserDetails, [e.target.name]: e.target.value });
  };

  const renderInfoToEdit = () => {
    return (
      <div className={classes.paper}>
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircleIcon />
              </Grid>
              <Grid item>
                <TextField
                  label="Edit Display Name"
                  name="title"
                  type="text"
                  defaultValue={userName}
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
                  defaultValue={
                    description
                      ? description
                      : "Tell the world about yourself !"
                  }
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
                  type="text"
                  // defaultValue={moment(creationDate).format("YYYY-MM-DD")}
                  onChange={handleOnChange}
                />
              </Grid>
            </Grid>
            {userDataFromDB && (
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
            )}
          </div>
        </form>
      </div>
    );
  };

  return <div>{userName !== undefined && renderInfoToEdit()}</div>;
}
