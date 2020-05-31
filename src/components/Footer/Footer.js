import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: #ffffff;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <span>© 2020 Made by Nick Wang with love</span>
    </StyledFooter>
  );
}
