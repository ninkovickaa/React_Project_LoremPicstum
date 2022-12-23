import React, { useEffect, useState } from "react";
import { Axios } from "../global/axios";
import { FiFastForward } from "react-icons/fi";
import Picture from "./Picture";

const RandomPictureGenerator = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [idRandom, setIdRandom] = useState<any|string>();
  const [urlRandom, setUrlRandom] = useState<string>("");

  const fetchData = async () => {
    setLoading(true);
    let result = await Axios(`${Axios.defaults.baseURL}400/500`);
    setIdRandom(result.headers["picsum-id"]);
    setUrlRandom(result.request["responseURL"]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return loading ? (
    <div className="bigCenterText">loading!!!</div>
  ) : (
    <div className={`picturesContainer random`}>
      <Picture
        key={idRandom}
        author={""}
        url={urlRandom.toString()}
        urlDownload={urlRandom.toString()}
        id={idRandom}
      />
      <div className="nextIcon">
        <FiFastForward onClick={handleClick} />
      </div>
    </div>
  );
};

export default RandomPictureGenerator;
