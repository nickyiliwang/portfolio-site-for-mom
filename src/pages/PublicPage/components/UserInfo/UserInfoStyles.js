import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const StyledUserInfo = styled.div`
  width: 60%;
  margin-left: 20px;
  font-family: "Open Sans", sans-serif;
  padding-top: 20px;

  p {
    margin-bottom: 10px;
  }

  a {
    margin-bottom: 10px;
    color: rgba(var(--fe0, 0, 55, 107), 1);
    text-decoration: none;
    font-weight: 600;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Username = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

  h2 {
    font-size: 28px;
  }

  button {
    margin-left: 25px;
    background: rgba(var(--d69, 0, 149, 246), 1);
    padding: 5px 9px;
    text-transform: capitalize;
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

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
