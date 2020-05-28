import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import firebase, { firestore } from "../../../../util/firebaseApp";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import {
  StyledPictureDiv,
  StyledDropzoneTextContainer,
} from "../../../../components/Dropzone/DropzoneStyles";

export default function ProfilePictureDropZone({ userId, handleClose }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const storageRef = firebase.storage().ref();

      acceptedFiles.forEach((file) => {
        if (!file.path.match(/.(jpg|jpeg|png|gif)$/i)) return;

        const profileDbRef = firestore.collection("userProfile").doc(userId);

        // Upload the image to Cloud Storage.
        let filePath = `${userId}/ProfileImage/${file.path}`;
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
                  .collection("userProfile")
                  .doc(userId)
                  .get()
                  .then((doc) => {
                    if (doc.exists) {
                      profileDbRef.update({
                        photoURL: url,
                      });
                    }
                    handleClose();
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
    [userId, handleClose]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <StyledPictureDiv {...getRootProps()}>
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
    </StyledPictureDiv>
  );
}
