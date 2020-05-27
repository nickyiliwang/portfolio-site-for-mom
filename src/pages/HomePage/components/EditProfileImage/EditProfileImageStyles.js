import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  editBtnContainer: {
    visibility: "hidden",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    position: "relative",
  },
  editBtn: {
    width: "50px",
    height: "50px",
    background: "transparent",
    "&:hover": {
      background: "transparent",
    },
  },
  closeBtn: {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));
