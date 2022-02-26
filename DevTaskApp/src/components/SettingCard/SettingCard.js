import React from "react";
import "../../styles/setting/Setting.css";

const SettingCard = ({ children, className }) => {
  return <div className={`Setting_card ${className}`}>{children}</div>;
};

export default SettingCard;
