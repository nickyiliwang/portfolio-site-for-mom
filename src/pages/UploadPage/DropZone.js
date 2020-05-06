import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import firebase, { firestore } from "../../util/firebaseApp";
import { validate } from "./validate-image";

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

export default function MyDropzone({ callbackToReRenderArtworkPage }) {
  const storageRef = firebase.storage().ref();

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      if (!file.path.match(/.(jpg|jpeg|png|gif)$/i))
        console.log("not an image");

      const userId = `Nick Wang's artwork`;

      //   // Upload the image to Cloud Storage.
      let filePath = userId + file.name;
      firebase
        .storage()
        .ref(filePath)
        .put(file)
        .then(() => {
          storageRef
            .child(filePath)
            .getDownloadURL()
            .then(function (url) {
              console.log(url);

              // // then uploads the download url from
              firestore
                .collection("artwork")
                .doc(userId)
                .add({
                  title: file.name,
                  imageUrl: url,
                  timeStamp: Date.now(),
                })
                .then(function (docRef) {
                  console.log("Document written with ID: ", docRef.id);
                  callbackToReRenderArtworkPage(userId);
                })
                .catch(function (error) {
                  console.error("Error adding document: ", error);
                });
            })
            .catch((err) => console.error("error uploading file path", err));
        })
        .catch((err) => console.error("error uploading file", err));
    });
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
