import React from "react";
// components
import IndividualArtModal from "../../components/IndividualArtModal/IndividualArtModal";
// styles
import {
  StyledArtworkDisplay,
  StyledImage,
  StyledSingleArt,
  StyledUserInfo,
  StyledUserProfile,
} from "./HomePageStyles";



const HomePage = () => {
  const renderPlaceholderImages = () => {
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return images.map((image) => {
      return (
        <StyledSingleArt key={image}>
          <IndividualArtModal image={image} />
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
