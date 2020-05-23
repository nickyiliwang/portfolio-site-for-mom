import styled from "styled-components";
import { wrapper } from "../../components/GlobalStyles/GlobalStyles";

export const StyledHomePage = styled.section`
  ${wrapper}
  padding-top: 80px;
`;

export const StyledImage = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const StyledUserProfile = styled.div`
  display: flex;
  margin-top: 20px;
  * {
    margin-bottom: 10px;
  }
  /* align-items: center; */
`;

export const StyledUserInfo = styled.div`
  margin-left: 20px;
  font-family: "Open Sans", sans-serif;
  padding-top: 20px;

  h2 {
    font-size: 28px;
  }
`;

export const StyledArtworkDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledSingleArt = styled.div`
  flex-basis: 33.33%;
`;
