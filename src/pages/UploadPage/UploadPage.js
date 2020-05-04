import React from "react";

const UploadPage = (props) => {
  // useEffect will call and get a list of mom's work

  return (
    <section className="upload-page">
      <h2>Please Upload your work here</h2>
      <form>
        <label for="submit">
          <input name="submit" type="submit" />
        </label>
      </form>

      <div>Here is a list of all your artwork!</div>
      <div className="artwork-container"></div>
    </section>
  );
};

export default UploadPage;
