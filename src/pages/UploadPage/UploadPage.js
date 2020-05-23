import React, { useState, useEffect } from "react";
import MyDropzone from "../../components/Dropzone/DropZone";
import { firestore } from "../../util/firebaseApp";
import DisplayArtwork from "./components/DisplayArtwork";
import { useAuth } from "../../util/onAuthStateChanged";
import { StyledImageDiv, StyledSection } from "./UploadPageStyles";

const UploadPage = () => {
  const [state, setState] = useState({});
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
          setState({ ...newData });
        });
    }
  }, [userId]);

  return (
    <>
      {userId && (
        <StyledSection>
          <h2>Upload you artwork</h2>
          <MyDropzone userId={userId} />
          <div>Here is a list of all your artwork!</div>
          <StyledImageDiv>
            {state.hasOwnProperty("items") && (
              <DisplayArtwork userId={userId} artworks={state} />
            )}
          </StyledImageDiv>
        </StyledSection>
      )}
    </>
  );
};

export default UploadPage;
