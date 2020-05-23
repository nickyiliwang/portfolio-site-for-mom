import React from "react";
import SingleArtworkCard from "./SingleArtworkCard";

export default function DisplayArtwork({ userId, artworks }) {
  return (
    <div>
      {/* ideally would be nice to sort by upload date or have user select a sorting method. */}
      {artworks.items.map(({ ...props }, i) => {
        const { id } = props;
        return (
          <div key={id}>
            <SingleArtworkCard userId={userId} {...props} />
          </div>
        );
      })}
    </div>
  );
}
