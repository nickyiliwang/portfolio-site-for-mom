import React from "react";

export default function DisplayArtwork({ artworks }) {
  return (
    <div>
      {artworks.items.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.imageUrl} alt={item.title} />
          </div>
        );
      })}
    </div>
  );
}
