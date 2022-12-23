import React, { useEffect, useState } from "react";
import { Axios, AxiosAll } from "../global/axios";
import Picture from "./Picture";
import { PictureProps } from "./PictureGenerator";

interface Props {
  favoritePictures: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FavoritePictureGenerator: React.FC<Props> = ({ favoritePictures }) => {
  const [picturesFavorite, setPicturesFavorite] = useState<PictureProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    let arrayForFetch: any[] = [];
    let arrayForFavoritePictures: PictureProps[] = [];

    favoritePictures.map((picture: string) =>
      arrayForFetch.push(
        Axios.get(`${Axios.defaults.baseURL}id/${picture}/info`)
      )
    );
    const fetchData = async () => {
      const result = await AxiosAll(arrayForFetch);
      for await (const res of result) {
        arrayForFavoritePictures.push(res.data);
      }
      setPicturesFavorite(arrayForFavoritePictures);
      setLoading(false);
    };
    fetchData();
  }, [favoritePictures]);

  return loading ? (
    <div className="bigCenterText">loading!!!</div>
  ) : picturesFavorite.length > 0 ? (
    <div className="picturesContainer containerFavorite">
      {picturesFavorite.map((picture) => {
        return (
          <Picture
            key={picture.id}
            author={picture.author}
            url={`${Axios.defaults.baseURL}id/${picture.id}/340`}
            id={picture.id}
            urlDownload={picture.download_url}
          />
        );
      })}
    </div>
  ) : (
    <div className="bigCenterText">
      Sorry but you have no liked pictures. Go like first and come back :)
    </div>
  );
};
export default FavoritePictureGenerator;
