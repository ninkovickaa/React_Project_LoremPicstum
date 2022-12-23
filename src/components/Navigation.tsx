import { NavLink } from "react-router-dom";
import "../styles/navigation.scss";

const Navigation = () => {
  return (
    <div>
      <ul className="navigation">
        <li>
          <NavLink to="/all/?page=1">All</NavLink>
        </li>
        <li>
          <NavLink to="/random">Random</NavLink>
        </li>
        <li>
          <NavLink to="/favorite">Favorite</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
