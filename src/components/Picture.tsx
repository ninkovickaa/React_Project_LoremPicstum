import { FiMoreHorizontal } from "react-icons/fi";
import "../styles/picture.scss";
import LikeButton from "./LikeButton";

interface Props {
  author: string;
  url: string;
  urlDownload: string;
  id: number;
}

const Picture: React.FC<Props> = ({ author, url, urlDownload, id }) => {
  return (
    <div className="wrapper">
      <div className="headerPicture">
        <p>
          <LikeButton id={id} />
        </p>
        <p className="moreIcon">
          <FiMoreHorizontal />
        </p>
      </div>
      <div className="bodyPicture">
        <img className="pic" src={url} alt={author} />
      </div>
      <div className="footerPicture">
        <p>{author}</p>
      </div>
    </div>
  );
};

export default Picture;
