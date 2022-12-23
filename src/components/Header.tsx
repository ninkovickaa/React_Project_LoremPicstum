import React, { useState, useEffect, useContext } from "react";
import { darkLightContext } from "../App";
import Navigation from "./Navigation";
import SwitchBtn from "../components/SwitchBtn";
import "../styles/header.scss";

const Header = () => {
  const darkMode = useContext(darkLightContext);
  const [toggled, setToggled] = useState<boolean>(darkMode.darkMode);

  const handleClick = () => {
    setToggled((s) => !s);
  };

  useEffect(() => {
    if (toggled) {
      darkMode.callBack(toggled);
    } else {
      darkMode.callBack(toggled);
    }
  }, [darkMode, toggled]);

  return (
    <div className={`header ${darkMode.darkMode ? "darkTheme" : ""}`}>
      <div>
        <a
          href="https://htecgroup.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://htecgroup.com/wp-content/themes/htec/dist/images/culture/culture-group.svg"
            alt="HTEC_logo"
            width="80"
            height="60"
            className="logo"
          ></img>
        </a>
      </div>
      <Navigation />
      <div className="darkMode">
        <SwitchBtn toggled={toggled} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Header;
