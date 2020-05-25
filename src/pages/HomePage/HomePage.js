import React, { useState, useEffect } from "react";
// components
import IndividualArtModal from "./components/IndividualArtModal/IndividualArtModal";
import EditProfileImage from "./components/EditProfileImage/EditProfileImage";
// styles
import {
  StyledArtworkDisplay,
  StyledProfileImage,
  StyledUserInfo,
  StyledUserProfile,
  StyledHomePage,
  StyledEditProfileBtn,
} from "./HomePageStyles";

// firebase
import { firestore } from "../../util/firebaseApp";
// auth
import { useAuth } from "../../util/onAuthStateChanged";
// moment
import moment from "moment";
import EmptyArtwork from "../../util/EmptyArtwork";

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
        <StyledProfileImage>
          {/* this is modal should me */}
          <img
            src={photoURL ? photoURL : "http://placekitten.com/300/300"}
            alt="user profile"
          />
          <StyledEditProfileBtn>
            <EditProfileImage />
          </StyledEditProfileBtn>
        </StyledProfileImage>
        <StyledUserInfo>
          <h2>{userName}</h2>
          <p>{`Joined: ${moment(creationDate).fromNow()}`}</p>
          <p>{`Description: ${
            description === "" ? "Tell the world about yourself!" : description
          }`}</p>
          <a
            href="http://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {website === "" ? "https://www.MyWebsite.com" : website}
          </a>
        </StyledUserInfo>
      </StyledUserProfile>
    );
  };

  const renderImages = () => {
    if (userArtWorkFromDB) {
      return userArtWorkFromDB.map(({ id, ...props }) => {
        return <IndividualArtModal key={id} {...props} />;
      });
    }
  };

  return (
    <StyledHomePage>
      {renderUserInfo()}
      <hr />
      <StyledArtworkDisplay>
        {userArtWorkFromDB ? renderImages() : <EmptyArtwork />}
      </StyledArtworkDisplay>
    </StyledHomePage>
  );
};

export default HomePage;
