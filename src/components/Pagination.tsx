import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useQuery } from "./Routes";
import { useWindowSize } from "../global/useWindowSize";
import "../styles/pagination.scss";

interface Props {
  paginate: any;
  initialPage: number;
  maxPagination: number;
}

const Pagination: React.FC<Props> = ({
  paginate,
  initialPage,
  maxPagination,
}: any) => {
  const windowWidth = useWindowSize();
  const [selected, setSelected] = useState<number>(initialPage);
  const history = useHistory();
  const query = useQuery();
  const pageFromUrl = query.get("page");

  const range = () => {
    if (windowWidth > 950) {
      return 12;
    } else if (windowWidth <= 950 && windowWidth > 600) {
      return 6;
    } else {
      return 3;
    }
  };

  const createArray = (start: number) => {
    let paginations: number[] = [];
    if (start + paginationRange > maxPagination) {
      start = maxPagination - (paginationRange - 1);
    }
    for (let i = start; i < start + paginationRange; i++) {
      paginations.push(i);
    }
    return paginations;
  };

  const [paginationRange, setPaginationRange] = useState(range());
  const [paginations, setPaginations] = useState<number[]>(
    createArray(selected)
  );

  useEffect(() => {
    const numberFromUrl = Number(pageFromUrl);
    const remainder = numberFromUrl % paginationRange;
    const paginationPage =
      Math.floor(numberFromUrl / paginationRange) * paginationRange;
    const numberOfPaginationPages =
      remainder === 0
        ? paginationPage - paginationRange + 1
        : paginationPage + 1;
    setPaginations(createArray(numberOfPaginationPages));
    setSelected(numberFromUrl);
    paginate(numberFromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageFromUrl, paginationRange]);

  useEffect(() => {
    setPaginationRange(range());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  const handleClick = (e: any) => {
    let target = e.target;
    setSelected(target.parentElement.value);
    paginate(target.parentElement.value);
  };

  const handleClickArrowLeft = () => {
    if (selected !== 1) {
      history.push(`/all/?page=${selected - 1}`);
    }
  };
  const handleClickArrowRight = () => {
    if (paginations[paginationRange - 1] !== maxPagination) {
      history.push(`/all/?page=${selected + 1}`);
    }
  };

  return (
    <div className="paginationContainer">
      <ul className="paginationArray">
        <li onClick={handleClickArrowLeft} className="paginationArrow">
          <i className="arrow left" />
        </li>
        {paginations.map((item, i) => {
          return (
            <li
              className={"pagination " + (selected === item ? "selected " : "")}
              value={item}
              onClick={handleClick}
              key={i}
            >
              <Link to={`/all/?page=${item}`}>{item}</Link>
            </li>
          );
        })}
        <li onClick={handleClickArrowRight} className="paginationArrow">
          <i className="arrow right" />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
