import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import firebase, { firestore } from "../../../../../util/firebaseApp";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ImageCrop from "../ImageCrop/ImageCrop";

import {
  StyledPictureDiv,
  StyledDropzoneTextContainer,
  StyledImageCropContainer,
} from "../../../../UploadPage/components/Dropzone/DropzoneStyles";

export default function ProfilePictureDropZone({ userId, handleClose }) {
  const [isCropReady, setIsCropReady] = useState(false);
  const [fileInput, setFileInput] = useState();
  const onDrop = useCallback(
    (acceptedFile) => {
      const fileInputSource = [];
      fileInputSource.push(acceptedFile[0]);
      if (!fileInputSource[0].path.match(/.(jpg|jpeg|png|gif)$/i)) return;
      setFileInput(fileInputSource);
      setIsCropReady(true);
    },
    [userId, handleClose]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // // upload image
  const handleUpload = () => {
    console.log('subed')
    const storageRef = firebase.storage().ref();

  };

  return (
    <>
      {isCropReady ? (
        <StyledImageCropContainer>
          <ImageCrop imageFile={fileInput} handleUpload={handleUpload} />
        </StyledImageCropContainer>
      ) : (
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
      )}
    </>
  );
}
