import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Button } from "@material-ui/core";
import { uploadProfileImage } from "../uploadProfileImage/uploadProfileImage";

import {
  StyledCropAndPreviewContainer,
  StyledImageCropPreviewContainer,
  StyledImageCrop,
} from "../../../../UploadPage/components/Dropzone/DropzoneStyles";

export default function ImageCrop({
  imageFile,
  userId,
  handleCancelUpload,
  handleClose,
}) {
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 1 / 1 });
  const [previewUrl, setPreviewUrl] = useState();
  const [croppedImageBlob, setCroppedImageBlob] = useState();

  useEffect(() => {
    const onSelectFile = (e) => {
      if (imageFile && imageFile.length > 0) {
        const reader = new FileReader();
        reader.addEventListener("load", () => setUpImg(reader.result));
        reader.readAsDataURL(imageFile[0]);
      }
    };
    onSelectFile();
  }, [imageFile]);

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  const makeClientCrop = async (crop) => {
    if (imgRef.current && crop.width && crop.height) {
      createCropPreview(imgRef.current, crop, "CroppedProfile.jpeg");
    }
  };

  const createCropPreview = async (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Canvas is empty"));
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(previewUrl);
        setPreviewUrl(window.URL.createObjectURL(blob));
        setCroppedImageBlob(blob);
      }, "image/jpeg");
    });
  };

  // upload image
  const handleUpload = () => {
    uploadProfileImage(userId, croppedImageBlob, handleClose);
  };

  return (
    <StyledCropAndPreviewContainer>
      <StyledImageCrop>
        <ReactCrop
          src={upImg}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={(c) => setCrop(c)}
          onComplete={makeClientCrop}
        />
      </StyledImageCrop>

      {previewUrl && (
        <StyledImageCropPreviewContainer>
          <h2>Your New Profile:</h2>
          <img alt="Crop preview" src={previewUrl} />
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleCancelUpload()}
            >
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleUpload}>
              Upload
            </Button>
          </div>
        </StyledImageCropPreviewContainer>
      )}
    </StyledCropAndPreviewContainer>
  );
}
