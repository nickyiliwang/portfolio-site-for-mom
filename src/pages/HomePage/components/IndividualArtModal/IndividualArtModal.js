import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { StyledSingleArt, StyledOpenModalButton } from "../../HomePageStyles";

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

    maxWidth: "1440px",
    width: "80%",
    margin: "0 auto",
  },
  imageContainer: {
    width: "30vw",
    margin: "0 auto",
  },
  img: {
    width: "100%",
  },
}));

export default function IndividualArtModal({ imageUrl, title }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledSingleArt>
      <StyledOpenModalButton onClick={handleOpen}>
        <img src={imageUrl} alt={title} />
      </StyledOpenModalButton>
      <Modal
        aria-labelledby={title}
        aria-describedby={title}
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
            <div className={classes.imageContainer}>
              <img src={imageUrl} alt={title} className={classes.img} />
            </div>
          </div>
        </Fade>
      </Modal>
    </StyledSingleArt>
  );
}
