import React from "react";
import firebase, { firestore } from "../../../util/firebaseApp";
import { Button } from "@material-ui/core";

export default function DeleteImage({ userId, ...props }) {
  const handleDeleteOnClick = (art) => {
    // Create a reference to the file to delete
    const desertRef = firebase
      .storage()
      .ref()
      .child(`${userId}/${art.originalFileTitle}`);

    // Delete the file
    desertRef
      .delete()
      .then(() => {
        console.log("file deleted");
        // delete db link and info/ delete the image from db
        const docRef = firestore.collection("artwork").doc(userId);
        docRef
          .get()
          .then(function (doc) {
            if (doc.exists) {
              const updatedArtItems = doc
                .data()
                .items.slice()
                .filter((data) => {
                  return data.originalFileTitle !== art.originalFileTitle;
                });

              docRef.update({ items: updatedArtItems });
            } else {
              console.error("No such document!", doc.data());
            }
          })
          .catch((err) => console.error("Error getting document:", err));
      })
      .catch((err) => console.error(err));
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => handleDeleteOnClick(props)}
    >
      Delete
    </Button>
  );
}
