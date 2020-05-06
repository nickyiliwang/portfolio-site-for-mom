import React from "react";
import MyDropzone from "./DropZone";

const UploadPage = (props) => {
  // useEffect will call and get a list of mom's work

  return (
    <section className="upload-page">
      <h2>Please Upload your work here</h2>

      {/* ideally a dropZone */}
      <MyDropzone />

      <div>Here is a list of all your artwork!</div>
      <div className="artwork-container"></div>
    </section>
  );
};

export default UploadPage;
