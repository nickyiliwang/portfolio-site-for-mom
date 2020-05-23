import styled from "styled-components";
import { wrapper } from "../../components/GlobalStyles/GlobalStyles";

export const StyledHomePage = styled.section`
  ${wrapper}
  padding-top: 80px;
`;

export const StyledImage = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const StyledUserInfo = styled.div`
  width: 60%;

  margin-left: 20px;
  font-family: "Open Sans", sans-serif;
  padding-top: 20px;

  h2 {
    font-size: 28px;
  }
`;

export const StyledUserProfile = styled.div`
  display: flex;
  margin-top: 20px;
  * {
    margin-bottom: 10px;
  }
`;

export const StyledArtworkDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledSingleArt = styled.div`
  flex-basis: 33.33%;
`;
