import React, { useEffect, useState } from "react";
import { useQuery } from "../../components/Routes";
import Grid from "../../components/Grid";
import "./All.scss";

const MAX_PAGINATIONS = 75;

export const All = () => {
  const params = useQuery();
  const pageFromUrl = Number(params.get("page"));
  const [page, setPage] = useState<number>(pageFromUrl);

  useEffect(() => {
    setPage(pageFromUrl);
  }, [pageFromUrl, params]);

  if (!Number.isInteger(page) || page < 1 || page > MAX_PAGINATIONS) {
    return (
      <div className="notFound">
        <p>Oops such a page does not exist :(</p>
      </div>
    );
  } else {
    return (
      <div className="all">
        <Grid />
      </div>
    );
  }
};
