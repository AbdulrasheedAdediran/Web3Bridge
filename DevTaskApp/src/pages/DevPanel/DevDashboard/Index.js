import React from "react";
import Avatar from "../../../assets/avatar.svg";
import "../../../styles/dashboardStyle/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircle } from "@fortawesome/free-solid-svg-icons";
import DashCards from "../../../components/cards/contents/DashCards";

function Index() {
  return (
    <div className="container">
      <div className="flex-content">
        <div className="user__profile">
          <div className="avatar-container">
            <img src={Avatar} alt="avatar" className="avatar" />
          </div>
          <p className="user__intro">Hello, Eric !</p>
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faBell} size="lg" className="bell-icon" />
          <FontAwesomeIcon icon={faCircle} className="circle-icon" />
        </div>
      </div>

      <div className="cards-wrap">
        <DashCards />
        <DashCards />
        <DashCards />
        <DashCards />
        <DashCards />
        <DashCards />
        <DashCards />
        <DashCards />
        <DashCards />
        <DashCards />
        <DashCards />
        <DashCards />
        <DashCards />
      </div>
    </div>
  );
}

export default Index;
