import styled, { css } from "styled-components";
import { flexCenter } from "../../../../components/GlobalStyles/GlobalStyles";

export const dropzoneCss = css`
  ${flexCenter}
  flex-direction: column;
  font-weight: 200;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 5px;
  cursor: pointer;
`;

export const StyledDiv = styled.div`
  ${dropzoneCss}
  margin: 10px 0;
  height: 300px;
`;

export const StyledDropzoneTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 20px;
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
  }
`;
