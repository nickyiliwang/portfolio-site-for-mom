import styled from "styled-components";
import { dropzoneCss } from "../../../../UploadPage/components/Dropzone/DropzoneStyles";
import { flexCenter } from "../../../../../components/GlobalStyles/GlobalStyles";

export const StyledPictureDiv = styled.div`
  ${dropzoneCss};
  padding: 0 100px;
  margin: 50px;
  min-height: 40vh;
  min-width: 60vw;

  @media (max-width: 800px) {
    padding: 0 10px;
    margin: 40px;
    text-align: center;
  }
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

export const StyledImageCropContainer = styled.div`
  ${flexCenter}

  margin: 50px;
  min-height: 60vh;
  min-width: 80vw;
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 40px 0;
  }
`;
