import styled, { css } from "styled-components";

const NormalDropzoneCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: 200;
  height: 300px;
  border: 2px dashed #f16624;
  border-radius: 5px;
  background: white;
  margin: 10px 0;
  cursor: pointer;
`;

export const StyledDiv = styled.div`
  ${NormalDropzoneCss}
`;

export const StyledPictureDiv = styled.div`
  ${NormalDropzoneCss};
  margin: 50px;
  min-width: 80vw;
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
