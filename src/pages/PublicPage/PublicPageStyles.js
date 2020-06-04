import styled from "styled-components";
import { wrapper } from "../../components/GlobalStyles/GlobalStyles";

export const StyledHomePage = styled.section`
  ${wrapper}
  padding: 80px 0 30px 0;
`;

export const StyledUserProfile = styled.div`
  display: flex;
  margin: 20px 0;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 0;
  }
`;

export const StyledProfileImageContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const StyledProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;

  img {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: 500px) {
      right: 0;
    }
  }

  &:hover > div {
    visibility: visible;
  }
`;

export const StyledArtworkDisplay = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const StyledSingleArt = styled.div`
  width: 33.33%;
`;

export const StyledOpenModalButton = styled.div`
  position: relative;
  width: calc(100% - 8%);
  margin: 4%;
  height: auto;
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;
