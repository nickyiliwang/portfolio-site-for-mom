import styled from "styled-components";
import { flexCenter } from "../../../../../components/GlobalStyles/GlobalStyles";

export const StyledImageCropPreviewContainer = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 30%;
  padding: 10px;

  h2 {
    font-family: "Open Sans", sans-serif;
    margin-bottom: 20px;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  div {
    padding: 20px 0;
    min-width: 200px;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const StyledCropAndPreviewContainer = styled.div`
  ${flexCenter}
  justify-content: space-evenly;
  flex-direction: row;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const StyledImageCrop = styled.div`
  ${flexCenter}
  img {
    object-fit: cover;
    width: 100%;
    max-width: 60vw;
  }
`;
