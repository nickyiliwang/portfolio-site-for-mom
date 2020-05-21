import React, { useState, useEffect } from "react";
// components
import IndividualArtModal from "../../components/IndividualArtModal/IndividualArtModal";
// styles
import {
  StyledArtworkDisplay,
  StyledImage,
  StyledSingleArt,
  StyledUserInfo,
  StyledUserProfile,
  StyledHomePage,
} from "./HomePageStyles";
// firebase
import { firestore } from "../../util/firebaseApp";
// auth
import { useAuth } from "../../util/onAuthStateChanged";
// moment
import moment from "moment";

const HomePage = () => {
  const auth = useAuth();
  const [userDataFromDB, setUserDataFromDB] = useState({});

  useEffect(() => {
    if (auth.user) {
      const profileDbRef = firestore
        .collection("userProfile")
        .doc(auth.user.uid);
      profileDbRef.get().then((res) => {
        if (res.data()) {
          setUserDataFromDB(res.data());
        }
      });
    }
  }, [auth]);

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

  const renderUserInfo = () => {
    const {
      userName = "",
      description = "",
      creationDate,
      photoURL,
      website,
    } = userDataFromDB;
    return (
      <StyledUserProfile>
        <StyledImage>
          <img
            src={photoURL ? photoURL : "http://placekitten.com/300/300"}
            alt="user profile"
          />
        </StyledImage>
        <StyledUserInfo>
          <h2>{`Name: ${userName}`}</h2>
          <p>{`Joined: ${moment(creationDate).fromNow()}`}</p>
          <p>{`Description: ${
            description === "" ? "Tell the world about yourself!" : description
          }`}</p>
          <a
            href="http://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Website:</span>{" "}
            {website === "" ? "Placeholder Google" : website}
          </a>
        </StyledUserInfo>
      </StyledUserProfile>
    );
  };

  return (
    <StyledHomePage>
      {renderUserInfo()}
      <hr />
      <StyledArtworkDisplay>{renderPlaceholderImages()}</StyledArtworkDisplay>
    </StyledHomePage>
  );
};

export default HomePage;
