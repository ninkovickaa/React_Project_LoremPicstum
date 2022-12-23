import React, { useState } from "react";
import PictureGenarotor from "./PictureGenerator";
import Pagination from "./Pagination";

const MAX_PAGINATION = 75;
const PICTURES_PER_PAGE = 12;
const INITIAL_PAGE = 0;

const Grid = () => {
  const [currentPage, setCurrentPage] = useState<number>(INITIAL_PAGE);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <PictureGenarotor page={currentPage} limit={PICTURES_PER_PAGE} />
      <Pagination
        paginate={paginate}
        initialPage={INITIAL_PAGE}
        maxPagination={MAX_PAGINATION}
      />
    </div>
  );
};

export default Grid;
