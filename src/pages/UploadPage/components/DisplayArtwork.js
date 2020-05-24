import React from "react";
import SingleArtworkCard from "./SingleArtworkCard";
import { StyledImagesContainer } from "../UploadPageStyles";

export default function DisplayArtwork({ userId, artworks }) {
  return (
    <StyledImagesContainer>
      {/* ideally would be nice to sort by upload date or have user select a sorting method. */}
      {artworks.items.map(({ ...props }, i) => {
        const { id } = props;
        return <SingleArtworkCard key={id} userId={userId} {...props} />;
      })}
    </StyledImagesContainer>
  );
}
