import React, { useState, useEffect } from "react";
import { Axios } from "../global/axios";
import Picture from "./Picture";
import "../styles/pictureGenerator.scss";

interface Props {
  page: number;
  limit: number;
}

export interface PictureProps {
  id: number;
  author: string;
  download_url: string;
}

const PictureGenerator: React.FC<Props> = ({ page, limit }) => {
  const [pictures, setPictures] = useState<PictureProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (page > 0 && page <= 75) {
      setLoading(true);
      const fetchData = async () => {
        const result = await Axios(`v2/list?page=${page}&limit=${limit}`);
        setPictures(result.data);
        setLoading(false);
      };
      fetchData();
    }
  }, [limit, page]);

  return loading ? (
    <div className="bigCenterText">loading!!!</div>
  ) : (
    <>
      <div className="picturesContainer">
        {pictures.map((picture) => {
          return (
            <Picture
              key={picture.id}
              author={picture.author}
              url={`${Axios.defaults.baseURL}id/${picture.id}/340`}
              urlDownload={picture.download_url}
              id={picture.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default PictureGenerator;
