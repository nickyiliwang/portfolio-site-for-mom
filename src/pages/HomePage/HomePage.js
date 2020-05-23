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
  const [userArtWorkFromDB, setUserArtWorkFromDB] = useState(null);

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

      const artworkDbRef = firestore.collection("artwork").doc(auth.user.uid);
      artworkDbRef.get().then((res) => {
        if (res.data()) {
          setUserArtWorkFromDB(res.data().items);
        }
      });
    }
  }, [auth]);

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
          {/* this is modal should me */}
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

  const renderImages = () => {
    if (userArtWorkFromDB) {
      return userArtWorkFromDB.map(({ id, ...props }) => {
        return (
          <StyledSingleArt key={id}>
            <IndividualArtModal {...props} />
          </StyledSingleArt>
        );
      });
    }
  };

  return (
    <StyledHomePage>
      {renderUserInfo()}
      <hr />
      <StyledArtworkDisplay>{renderImages()}</StyledArtworkDisplay>
    </StyledHomePage>
  );
};

export default HomePage;
