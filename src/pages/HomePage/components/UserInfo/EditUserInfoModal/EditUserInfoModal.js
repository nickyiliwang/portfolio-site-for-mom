import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField } from "@material-ui/core";
import firebase, { firestore } from "../../../../../util/firebaseApp";
import DescriptionIcon from "@material-ui/icons/Description";
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
    "& .MuiGrid-item": {
      marginBottom: "20px",
    },
  },
  submitBtn: {
    marginTop: "15px",
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
  const [newUserDetails, setNewUserDetails] = useState();
  const classes = useStyles();

  useEffect(() => {
    setNewUserDetails(userDataFromDB);
  }, [userDataFromDB]);

  const { userName, description, website } = userDataFromDB;

  const handleSubmit = () => {
    const profileDbRef = firestore.collection("userProfile").doc(userId);
    profileDbRef
      .update(newUserDetails)
      .then(() => {
        console.log("updated");
        handleClose();
        window.location.reload(false);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
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
                  name="userName"
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
                  multiline
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
                <LanguageIcon />
              </Grid>
              <Grid item>
                <TextField
                  label="Website"
                  name="website"
                  type="url"
                  placeholder="https://example.com"
                  pattern="https://.*"
                  defaultValue={website}
                  onChange={handleOnChange}
                />
              </Grid>
            </Grid>
            {userId && (
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
