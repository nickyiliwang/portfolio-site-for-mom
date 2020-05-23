import React from "react";
import firebase, { firestore } from "../../../util/firebaseApp";
import SingleArtworkCard from "./SingleArtworkCard";

import EditModal from "./EditModal";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButtonContainer = styled.div`
  display: flex;
`;

export default function DisplayArtwork({ userId, artworks }) {
  const handleDeleteOnClick = (art) => {
    // Create a reference to the file to delete
    const desertRef = firebase
      .storage()
      .ref()
      .child(`${userId}/${art.originalFileTitle}`);

    // Delete the file
    desertRef
      .delete()
      .then(function () {
        // File deleted successfully
        console.log("file deleted");
        // delete firestore link and info
        const docRef = firestore.collection("artwork").doc(userId);
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
              console.error("No such document!");
            }
          })
          .catch(function (error) {
            console.error("Error getting document:", error);
          });
      })
      .catch(function (error) {
        // Uh-oh, an error occurred!
        console.error(error);
      });
  };

  return (
    <div>
      {/* ideally would be nice to sort by upload date or have user select a sorting method. */}
      {artworks.items.map(({ id, ...props }) => {
        return (
          <div key={id}>
            {/* <h2>{`Title:${title}`}</h2>
            <p>{`Creation Date: ${creationDate}`}</p>
            <p>{`Description: ${description}`}</p>
            <img src={imageUrl} alt={title} />
            <StyledButtonContainer>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteOnClick(item)}
              >
                Delete
              </Button>
            </StyledButtonContainer> */}
            <SingleArtworkCard {...props} />
          </div>
        );
      })}
    </div>
  );
}
