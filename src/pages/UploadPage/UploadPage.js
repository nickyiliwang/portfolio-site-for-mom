import React from "react";
import MyDropzone from "../../components/Dropzone/DropZone";
import { firestore } from "../../util/firebaseApp";
import styled from "styled-components";
import DisplayArtwork from "../../components/DisplayArtwork/DisplayArtwork";

const StyledImageDiv = styled.div`
  width: 400px;
`;

const UploadPage = () => {
  const [state, setstate] = React.useState({});

  React.useEffect(() => {
    const tempUser = `Nick Wang's artwork`;
    firestore
      .collection("artwork")
      .doc(tempUser)
      .onSnapshot((doc) => {
        setstate({ ...doc.data() });
      });
  }, []);

  return (
    <section className="upload-page">
      <h2>Please Upload your work here</h2>

      <MyDropzone />

      <div>Here is a list of all your artwork!</div>
      <StyledImageDiv>
        {state.hasOwnProperty("items") && <DisplayArtwork artworks={state} />}
      </StyledImageDiv>
    </section>
  );
};

export default UploadPage;
