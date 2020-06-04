import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledUserInfo, Username } from "./UserInfoStyles";
import moment from "moment";
import { IconButton, Tooltip, ClickAwayListener } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";

export default function UserInfo({ userDataFromDB }) {
  const [openToolTip, setOpenToolTip] = useState(false);
  const {
    userName = "",
    description = "",
    website,
    creationDate,
    uid,
  } = userDataFromDB;

  const handleTooltipClose = () => {
    setOpenToolTip(false);
  };

  const handleOnCopyClick = () => {
    setOpenToolTip(true);

    const el = document.createElement("textarea");
    el.value = `${window.location.href}`;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <StyledUserInfo>
      <Username>
        <h2>{userName}</h2>
        {/* Reserved for follow button */}
        {/* <Tooltip title="Edit your bio">
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Follow
          </Button>
        </Tooltip> */}
      </Username>
      <p>{`Joined: ${moment(creationDate).fromNow()}`}</p>
      <p>{`${
        description === "" ? "Tell the world about yourself!" : description
      }`}</p>
      <a
        href={website ? website : "http://www.google.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {website === "" ? "https://www.MyWebsite.com" : website}
      </a>

      <div>
        <Link
          to={{
            pathname: `/user/${uid}`,
          }}
          target="_blank"
        >
          {`@${userName}`}
        </Link>

        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={openToolTip}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Copied!"
          >
            <IconButton onClick={handleOnCopyClick}>
              {uid && <FileCopyIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
        </ClickAwayListener>
      </div>
    </StyledUserInfo>
  );
}
