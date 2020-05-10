import React from "react";
import styled from "styled-components";
// components
import TransitionsModal from "../../components/IndividualArtModal/IndividualArtModal";

const StyledImage = styled.div`
  width: 200px;
  height: 200px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const StyledUserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const StyledUserInfo = styled.div`
  margin-left: 20px;
`;

const StyledArtworkDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
`;

const StyledSingleArt = styled.div`
  flex-basis: 33.3%;
  padding: 10px;
`;

const HomePage = () => {
  

  const renderPlaceholderImages = () => {
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return images.map((image) => {
      return (
        <StyledSingleArt key={image}>
          <TransitionsModal image={image} />
        </StyledSingleArt>
      );
    });
  };

  return (
    <div>
      <StyledUserProfile>
        <StyledImage>
          <img src="http://placekitten.com/200/300" alt="place kitten" />
        </StyledImage>
        <StyledUserInfo>
          <h3>User profile</h3>
          <p>Name: Nick Wang</p>
          <p>Description/ intro</p>
          <p>Website: www.nickyiliwang.com</p>
        </StyledUserInfo>
      </StyledUserProfile>
      <hr />
      <StyledArtworkDisplay>{renderPlaceholderImages()}</StyledArtworkDisplay>
    </div>
  );
};

export default HomePage;
