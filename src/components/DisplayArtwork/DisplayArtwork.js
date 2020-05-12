import React from "react";
import firebase, { firestore } from "../../util/firebaseApp";
import moment from "moment";

export default function DisplayArtwork({ artworks }) {
  const tempUser = `Nick Wang's artwork`;
  const handleDeleteOnClick = (art) => {
    // Create a reference to the file to delete
    const desertRef = firebase
      .storage()
      .ref()
      .child(`${tempUser}/${art.originalFileTitle}`);

    // Delete the file
    desertRef
      .delete()
      .then(function () {
        // File deleted successfully
        console.log("file deleted");
        // delete firestore link and info
        const docRef = firestore.collection("artwork").doc(tempUser);
        docRef
          .get()
          .then(function (doc) {
            if (doc.exists) {
              const updatedArtItems = doc
                .data()
                .items.slice()
                .filter((data) => {
                  return data.id !== art.id;
                });

              docRef.update({ items: updatedArtItems });
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });
      })
      .catch(function (error) {
        // Uh-oh, an error occurred!
        console.error(error);
      });
  };

  const handleEditOnClick = (art) => {
    // this needs to open up a modal and let the user change it's infos
  };

  return (
    <div>
      {artworks.items.map((item) => {
        return (
          <div key={item.id}>
            <h2>{`Title:${item.title}`}</h2>
            <p>{`Upload Time: ${moment().fromNow(item.timestamp)}`}</p>
            <img src={item.imageUrl} alt={item.title} />
            <button onClick={() => handleDeleteOnClick(item)}>Delete</button>
            <button onClick={() => handleEditOnClick(item)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
}
