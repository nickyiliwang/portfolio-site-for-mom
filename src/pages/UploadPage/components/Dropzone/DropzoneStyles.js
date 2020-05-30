import styled, { css } from "styled-components";

const FlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NormalDropzoneCss = css`
  ${FlexCenter}
  flex-direction: column;

  font-weight: 200;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 5px;
  cursor: pointer;
`;

export const StyledDiv = styled.div`
  ${NormalDropzoneCss}
  margin: 10px 0;
  height: 300px;
`;

export const StyledPictureDiv = styled.div`
  ${NormalDropzoneCss};
  padding: 0 100px;
  margin: 50px;
  min-height: 40vh;
  min-width: 60vw;
`;

export const StyledImageCropContainer = styled.div`
  margin: 50px;
  min-height: 60vh;
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

export const StyledCropAndPreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

export const StyledImageCrop = styled.div`
  img {
    object-fit: cover;
    height: 100%;
    max-height: 80vh;
  }
`;

export const StyledImageCropPreviewContainer = styled.div`
  ${FlexCenter}
  width: 30%;
  padding: 20px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;
