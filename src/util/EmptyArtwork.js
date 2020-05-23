import React from "react";
import styled from "styled-components";
import PanoramaIcon from "@material-ui/icons/Panorama";
import { Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function EmptyArtwork() {
  return (
    <StyledDiv>
      <PanoramaIcon color="disabled" style={{ fontSize: 60 }} />
      <Typography style={{ color: grey[500] }}>
        No photos or videos yet!
      </Typography>
    </StyledDiv>
  );
}
