import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styled from "styled-components";

const StyledOpenModalButton = styled.div`
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  height: auto;
  overflow: hidden;
  cursor: pointer;
  img {
    object-fit: cover;
    width: 300px;
    height: 300px;
  }
`;

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
    <div>
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
            <img src={imageUrl} alt={title} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
