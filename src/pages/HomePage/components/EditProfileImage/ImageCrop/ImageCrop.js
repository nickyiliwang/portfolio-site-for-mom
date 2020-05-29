import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function ImageCrop({ imageUrl }) {
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 16 / 9 });
  const [previewUrl, setPreviewUrl] = useState();

  useEffect(() => {
    const onSelectFile = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader();
        reader.addEventListener("load", () => setUpImg(reader.result));
        reader.readAsDataURL(e.target.files[0]);
      }
    };
    onSelectFile();
  }, [imageUrl]);

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  const makeClientCrop = async (crop) => {
    if (imgRef.current && crop.width && crop.height) {
      createCropPreview(imgRef.current, crop, "newFile.jpeg");
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
      }, "image/jpeg");
    });
  };

  return (
    <div className="App">
      <ReactCrop
        src={upImg}
        onImageLoaded={onLoad}
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={makeClientCrop}
      />
      {previewUrl && <img alt="Crop preview" src={previewUrl} />}
    </div>
  );
}
