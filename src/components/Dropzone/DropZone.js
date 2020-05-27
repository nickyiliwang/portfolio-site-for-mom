import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import firebase, { firestore } from "../../util/firebaseApp";
import { v4 as uuidv4 } from "uuid";
import { StyledDiv, StyledDropzoneTextContainer } from "./DropzoneStyles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export default function MyDropzone({ userId }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const storageRef = firebase.storage().ref();
      acceptedFiles.forEach((file) => {
        if (!file.path.match(/.(jpg|jpeg|png|gif)$/i)) return;
        const artworkDbRef = firestore.collection("artwork").doc(userId);

        // Upload the image to Cloud Storage.
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
                // then uploads the download url to firestore
                firestore
                  .collection("artwork")
                  .doc(userId)
                  .get()
                  .then((doc) => {
                    if (doc.exists) {
                      artworkDbRef.update({
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
    },
    [userId]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <StyledDiv {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <StyledDropzoneTextContainer>
          <p>Drop the files here ...</p>
        </StyledDropzoneTextContainer>
      ) : (
        <StyledDropzoneTextContainer>
          <CloudUploadIcon style={{ fontSize: "60px" }} color="disabled" />
          <p>Drag 'n' drop files here, or click to select files</p>
        </StyledDropzoneTextContainer>
      )}
    </StyledDiv>
  );
}
