import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import firebase, { firestore } from "../../util/firebaseApp";
// import { validate } from "./validate-image";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 80vw;
  font-weight: 200;
  height: 300px;
  border: 2px dashed #f16624;
  border-radius: 5px;
  background: white;
  margin: 10px 0;
`;

export default function MyDropzone() {
  const storageRef = firebase.storage().ref();

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      // const userId = 'NickWang'
      // const filenameRef = storageRef.child(file.name)
      //   // Upload the image to Cloud Storage.
      //   let filePath = userId + "/" + file.name;
      //   const fileSnapshot = await firebase
      //     .storage()
      //     .ref(filePath)
      //     .put(file);
      //   const url = await fileSnapshot.ref.getDownloadURL();
      //   console.log(validate(file));



    // // uploads the download url from storage 
    //   firestore
    //     .collection("users")
    //     .add({
    //       first: "Ada",
    //       last: "Lovelace",
    //       born: 1815,
    //     })
    //     .then(function (docRef) {
    //       console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch(function (error) {
    //       console.error("Error adding document: ", error);
    //     });
    // });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <StyledDiv {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </StyledDiv>
  );
}
