import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import firebase, { firestore } from "../../util/firebaseApp";
import { v4 as uuidv4 } from "uuid";

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
  const onDrop = useCallback((acceptedFiles) => {
    const storageRef = firebase.storage().ref();

    acceptedFiles.forEach((file) => {
      if (!file.path.match(/.(jpg|jpeg|png|gif)$/i)) return;

      const userId = `Nick Wang's artwork`;
      const artworkDbRef = firestore.collection("artwork").doc(userId);

      //   // Upload the image to Cloud Storage.
      let filePath = `${userId}/${file.path}`;
      firebase
        .storage()
        .ref(filePath)
        .put(file)
        .then(() => {
          storageRef
            .child(filePath)
            .getDownloadURL()
            .then(function (url) {
              // then uploads the download url from
              firestore
                .collection("artwork")
                .doc(userId)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    artworkDbRef.update({
                      // pushing new items into the item array
                      items: firebase.firestore.FieldValue.arrayUnion({
                        title: file.name,
                        description: "",
                        creationDate: Date.now(),
                        originalFileTitle: file.name,
                        imageUrl: url,
                        timeStamp: Date.now(),
                        id: uuidv4(),
                      }),
                    });
                  } else {
                    artworkDbRef.set({
                      items: [
                        {
                          title: file.name,
                          description: "",
                          creationDate: Date.now(),
                          originalFileTitle: file.name,
                          imageUrl: url,
                          timeStamp: Date.now(),
                          id: uuidv4(),
                        },
                      ],
                    });
                  }
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
