import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/Momstagram Logo.png";

// mui style
export const useStyles = makeStyles((theme) => ({
  list: {
    width: "250px",
    overflow: "hidden",
  },
  // these buttons will be aligned to right side of abbBar
  toolbarButtonsRight: {
    [theme.breakpoints.down("335")]: {
      marginLeft: "0",
    },
    [theme.breakpoints.up("335")]: {
      marginLeft: "auto",
    },
  },
  listItemText: {
    color: "#247ba0",
    width: "200px",
  },
  appBar: {
    background: "#ffffff",
    boxShadow: "none",
    borderBottom: "1px solid rgba(var(--b6a,219,219,219),1)",
  },
  icon: {
    background: `url('${Logo}')`,
    backgroundSize: "200px 40px",
    backgroundRepeat: "no-repeat",
    width: "200px",
    height: "40px",
  },
  toolbar: {
    maxWidth: "1440px",
    width: "70%",
    margin: "0 auto",
    [theme.breakpoints.down("1000")]: {
      width: "100%",
    },
  },
}));
