import React, { useContext } from "react";
import { likedPicturesContext } from "../../App";
import FavoritePictureGenerator from "../../components/FavoritePictureGenerator";
import "./favorite.scss";

export const Favorite = () => {
  const [likedPicturesState] = useContext(likedPicturesContext);
  return (
    <div className="favorite">
      <FavoritePictureGenerator favoritePictures={likedPicturesState} />
    </div>
  );
};
