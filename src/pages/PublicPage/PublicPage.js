import React, { useState, useEffect } from "react";
import IndividualArtModal from "./components/IndividualArtModal/IndividualArtModal";
import UserInfo from "./components/UserInfo/UserInfo";
import EmptyArtwork from "../../util/EmptyArtwork";
import {
  StyledArtworkDisplay,
  StyledProfileImageContainer,
  StyledProfileImage,
  StyledUserProfile,
  StyledHomePage,
} from "./PublicPageStyles";
import { firestore } from "../../util/firebaseApp";
import { useHistory } from "react-router";

const PublicPage = () => {
  const history = useHistory();
  const [userDataFromDB, setUserDataFromDB] = useState({});
  const [userArtWorkFromDB, setUserArtWorkFromDB] = useState(null);
  const userId = history.location.pathname.split("/")[2];

  useEffect(() => {
    const profileDbRef = firestore.collection("userProfile").doc(userId);

    profileDbRef.get().then((res) => {
      if (res.data()) {
        setUserDataFromDB(res.data());
      }
    });

    const artworkDbRef = firestore.collection("artwork").doc(userId);
    artworkDbRef.get().then((res) => {
      if (res.data()) {
        setUserArtWorkFromDB(res.data().items);
      }
    });
  }, [userId]);

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
          </StyledProfileImage>
        </StyledProfileImageContainer>


        <UserInfo userId={userId} userDataFromDB={userDataFromDB} />
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

export default PublicPage;
