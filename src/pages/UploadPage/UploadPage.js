import React from "react";
import MyDropzone from "./DropZone";
import { firestore } from "../../util/firebaseApp";

const UploadPage = (props) => {
  const [state, setstate] = React.useState({});

  React.useEffect(() => {
    const tempUser = `Nick Wang's artwork`;
    firestore
      .collection("artwork")
      .doc(tempUser)
      .onSnapshot(function (doc) {
        console.log(
          "Current data from useEffect: ",
          setstate({ ...doc.data() })
        );
      });
  }, []);

  return (
    <section className="upload-page">
      <h2>Please Upload your work here</h2>

      <MyDropzone />

      <div>Here is a list of all your artwork!</div>
      <div className="artwork-container">{console.log(state)}</div>
    </section>
  );
};

export default UploadPage;
