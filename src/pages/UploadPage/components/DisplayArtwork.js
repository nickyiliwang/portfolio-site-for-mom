import React from "react";
import SingleArtworkCard from "./SingleArtworkCard";
import { StyledImagesContainer } from "../UploadPageStyles";

export default function DisplayArtwork({ userId, artworks }) {
  return (
    <StyledImagesContainer>
      {artworks.items.map(({ ...props }) => {
        const { id } = props;
        return <SingleArtworkCard key={id} userId={userId} {...props} />;
      })}
    </StyledImagesContainer>
  );
}
