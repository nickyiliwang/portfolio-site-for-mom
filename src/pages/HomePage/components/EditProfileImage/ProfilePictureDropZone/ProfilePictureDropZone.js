import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ImageCrop from "../ImageCrop/ImageCrop";

import {
  StyledPictureDiv,
  StyledDropzoneTextContainer,
  StyledImageCropContainer,
} from "./ProfilePictureDropZoneStyles";

export default function ProfilePictureDropZone({ userId, handleClose }) {
  const [isCropReady, setIsCropReady] = useState(false);
  const [fileInput, setFileInput] = useState();
  const onDrop = useCallback((acceptedFile) => {
    const fileInputSource = [];
    fileInputSource.push(acceptedFile[0]);
    if (!fileInputSource[0].path.match(/.(jpg|jpeg|png|gif)$/i)) return;
    setFileInput(fileInputSource);
    setIsCropReady(true);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleCancelUpload = () => {
    setFileInput(null);
    setIsCropReady(false);
  };

  return (
    <>
      {isCropReady ? (
        <StyledImageCropContainer>
          <ImageCrop
            imageFile={fileInput}
            userId={userId}
            handleCancelUpload={handleCancelUpload}
            handleClose={handleClose}
          />
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
