import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Cards from "../Cards";

const DashCards = () => {
  return (
    <Cards>
      <div>
        <h2>Project Abdul</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          laboriosam sit aut vel officia maxime vitae libero, aspernatur nam,
          nobis, amet quisquam? Porro, saepe provident.
        </p>
        <div className="days">
          <p>5 days left</p>
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </div>
      </div>
    </Cards>
  );
};

export default DashCards;
