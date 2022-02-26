import React from "react";

import "../../styles/Cards/Cards.scss";

const Cards = ({ children }) => {
  const Colors = [
    {
      0: "rgba(17, 101, 48, 0.3)",
      1: "rgba(79, 189, 186, 0.3)",
      2: "#3be8b0",
      3: "rgba(255, 201, 0, 0.3)",
      4: "#FDD2BF",
    },
  ];

  // const rand = Math.min([(0)[(5)[(1, 2, 3, 4)]]]);
  const rand = Math.floor(Math.random() * 5);
  const single = Colors.map((item) => item[rand]);

  return (
    <div className="card-container" style={{ background: single }}>
      {children}
    </div>
  );
};

export default Cards;
