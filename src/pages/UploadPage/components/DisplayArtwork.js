import React from "react";
import firebase, { firestore } from "../../../util/firebaseApp";
import moment from "moment";
import EditModal from "./EditModal";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButtonContainer = styled.div`
  display: flex;
`;

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

  return (
    <div>
      {artworks.items.map((item) => {
        return (
          <div key={item.id}>
            <h2>{`Title:${item.title}`}</h2>
            <p>{`Upload Time: ${moment().fromNow(item.timestamp)}`}</p>
            <img src={item.imageUrl} alt={item.title} />
            <StyledButtonContainer>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteOnClick(item)}
              >
                Delete
              </Button>
              <EditModal artDetails={item} />
            </StyledButtonContainer>
          </div>
        );
      })}
    </div>
  );
}
