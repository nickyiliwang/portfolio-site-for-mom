import React, { useState, useEffect } from "react";
import MyDropzone from "../../components/Dropzone/DropZone";
import { firestore } from "../../util/firebaseApp";
import DisplayArtwork from "./components/DisplayArtwork";
import { useAuth } from "../../util/onAuthStateChanged";
import { StyledSection, StyledDropZoneDiv } from "./UploadPageStyles";
import EmptyArtwork from "../../util/EmptyArtwork";

const UploadPage = () => {
  const [artworks, setArtworks] = useState({});
  const [userId, setUserId] = useState(null);
  const auth = useAuth();

  useEffect(() => {
    if (auth.user) {
      setUserId(auth.user.uid);
    }
  }, [auth]);

  useEffect(() => {
    if (userId) {
      firestore
        .collection("artwork")
        .doc(userId)
        .onSnapshot((doc) => {
          const newData = doc.data();
          setArtworks({ ...newData });
        });
    }
  }, [userId]);

  return (
    <>
      {userId && (
        <StyledSection>
          <StyledDropZoneDiv>
            <MyDropzone userId={userId} />
          </StyledDropZoneDiv>
          <hr />
          {artworks.hasOwnProperty("items") ? (
            <DisplayArtwork userId={userId} artworks={artworks} />
          ) : (
            <EmptyArtwork />
          )}
        </StyledSection>
      )}
    </>
  );
};

export default UploadPage;
