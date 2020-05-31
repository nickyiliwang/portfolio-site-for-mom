import React, { useState, useEffect } from "react";
import IndividualArtModal from "./components/IndividualArtModal/IndividualArtModal";
import EditProfileImage from "./components/EditProfileImage/EditProfileImage";
import UserInfo from "./components/UserInfo/UserInfo";
import EmptyArtwork from "../../util/EmptyArtwork";
import {
  StyledArtworkDisplay,
  StyledProfileImageContainer,
  StyledProfileImage,
  StyledUserProfile,
  StyledHomePage,
} from "./HomePageStyles";
import { firestore } from "../../util/firebaseApp";
import { useAuth } from "../../util/onAuthStateChanged";

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
    const { photoURL } = userDataFromDB;
    return (
      <StyledUserProfile>
        <StyledProfileImageContainer>
          <StyledProfileImage>
            <img
              src={photoURL ? photoURL : "http://placekitten.com/300/300"}
              alt="user profile"
            />
            <EditProfileImage />
          </StyledProfileImage>
        </StyledProfileImageContainer>
        <UserInfo userDataFromDB={userDataFromDB} />
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
        {userArtWorkFromDB &&
        (userArtWorkFromDB === undefined || userArtWorkFromDB.length) ? (
          renderImages()
        ) : (
          <EmptyArtwork />
        )}
      </StyledArtworkDisplay>
    </StyledHomePage>
  );
};

export default HomePage;
