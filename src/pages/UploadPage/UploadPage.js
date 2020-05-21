import React, { useState, useEffect } from "react";
import MyDropzone from "../../components/Dropzone/DropZone";
import { firestore } from "../../util/firebaseApp";
import styled from "styled-components";
import DisplayArtwork from "./components/DisplayArtwork";

const StyledImageDiv = styled.div`
  width: 400px;
`;

const StyledSection = styled.section`
  margin-top: 64px;
  padding-top: 20px;
`;

const UploadPage = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    const tempUser = `Nick Wang's artwork`;
    firestore
      .collection("artwork")
      .doc(tempUser)
      .onSnapshot((doc) => {
        const newData = doc.data();
        setState({ ...newData });
      });
  }, []);

  return (
    <StyledSection>
      <MyDropzone />
      <div>Here is a list of all your artwork!</div>
      <StyledImageDiv>
        {state.hasOwnProperty("items") && <DisplayArtwork artworks={state} />}
      </StyledImageDiv>
    </StyledSection>
  );
};

export default UploadPage;
