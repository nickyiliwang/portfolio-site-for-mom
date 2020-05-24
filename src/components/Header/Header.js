import React from "react";
import MuiDrawers from "./MuiDrawers";
import { wrapper } from "../GlobalStyles/GlobalStyles";
import styled from "styled-components";

const StyledDiv = styled.div`
  ${wrapper}
`;

const Header = () => {
  return (
    <StyledDiv>
      <MuiDrawers />
    </StyledDiv>
  );
};

export default Header;
