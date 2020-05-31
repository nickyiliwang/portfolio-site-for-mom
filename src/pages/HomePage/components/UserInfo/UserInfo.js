import React from "react";
import { StyledUserInfo } from "./UserInfoStyles";
import moment from "moment";

export default function UserInfo({ userDataFromDB }) {
  const {
    userName = "",
    description = "",
    website,
    creationDate,
  } = userDataFromDB;
  
  return (
    <StyledUserInfo>
      <h2>{userName}</h2>
      <p>{`Joined: ${moment(creationDate).fromNow()}`}</p>
      <p>{`Description: ${
        description === "" ? "Tell the world about yourself!" : description
      }`}</p>
      <a
        href={website ? website : "http://www.google.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {website === "" ? "https://www.MyWebsite.com" : website}
      </a>
    </StyledUserInfo>
  );
}
