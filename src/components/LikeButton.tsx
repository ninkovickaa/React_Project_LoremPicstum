import React, { useContext } from "react";
import { FaHeart as Heart } from "react-icons/fa";
import swal from "sweetalert";
import { darkLightContext, likedPicturesContext } from "../App";
import "../styles/likeButton.scss";

interface Props {
  id: number;
}

const MAX_NUMBER_OF_LIKED_PICTURES = 5;

const LikeButton: React.FC<Props> = ({ id }) => {
  const darkMode = useContext(darkLightContext);
  const [likedPicturesState, setLikedPicturesState] =
    useContext(likedPicturesContext);

  const handleClick = () => {
    if (isLiked()) {
      const removeLiked = (likedPicturesState as number[]).filter(
        (p) => p !== id
      );
      setLikedPicturesState(removeLiked);
    } else {
      if (likedPicturesState.length === MAX_NUMBER_OF_LIKED_PICTURES) {
        swal("ERROR", "Maximum amount of photos you can like is 5!", "error", {
          className: `${darkMode.darkMode ? "darkTheme" : ""}`,
        });
      } else {
        setLikedPicturesState([...likedPicturesState, id]);
      }
    }
  };

  const isLiked = () => {
    return (likedPicturesState as number[]).find((item) => item === id)
      ? "liked"
      : null;
  };

  return (
    <Heart size={25} className={`heart ${isLiked()}`} onClick={handleClick} />
  );
};
export default LikeButton;
