import React from "react";
import MyDropzone from "./DropZone";
import { firestore } from "../../util/firebaseApp";

const UploadPage = (props) => {
  React.useEffect(() => {
    const tempUser = `Nick Wang's artwork`;
    firestore
      .collection("artwork")
      .doc(tempUser)
      .onSnapshot(function (doc) {
        console.log("Current data from useEffect: ", doc.data());
      });
  }, []);

  const callbackToReRenderArtworkPage = (user) => {
    console.log(user);
    // firestore
    //   .collection("artwork")
    //   .doc(user)
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       console.log(`${doc.id} => ${doc.data()}`);
    //     });
    //   });
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
