import React from "react";
import "./ImagesList.css";
import { ImageCard } from "./ImageCard";

export const ImagesList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};
