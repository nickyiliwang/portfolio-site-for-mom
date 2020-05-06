import React from "react";
import MyDropzone from "./DropZone";
import { firestore } from "../../util/firebaseApp";

const UploadPage = (props) => {
  // useEffect will call and get a list of mom's work

  React.useEffect(() => {
    const tempUser = `Nick Wang's artwork`;
    firestore
      .collection("artwork")
      .doc(tempUser)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.exists) {
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          });
        }
      });
  }, []);

  const callbackToReRenderArtworkPage = (user) => {
    firestore
      .collection("artwork")
      .doc(user)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      });
  };

  return (
    <section className="upload-page">
      <h2>Please Upload your work here</h2>

      <MyDropzone
        callbackToReRenderArtworkPage={callbackToReRenderArtworkPage}
      />

      <div>Here is a list of all your artwork!</div>
      <div className="artwork-container"></div>
    </section>
  );
};

export default UploadPage;
