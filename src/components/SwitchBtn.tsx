import React from "react";
import "../styles/switchBtn.scss";

interface Props {
  toggled: boolean;
  onClick: () => void;
}

const Toggle: React.FC<Props> = ({ toggled, onClick }) => {
  return (
    <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
      <div className="notch">
        <div className="crater" />
        <div className="crater" />
      </div>
      <div>
        <div className="shape sm" />
        <div className="shape sm" />
        <div className="shape md" />
        <div className="shape lg" />
      </div>
    </div>
  );
};

export default Toggle;
