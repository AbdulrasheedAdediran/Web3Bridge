import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/home/Home.css";

function Home() {
  return (
    <div className="Home">
      <NavLink to="/login">
        <h1>Admin Dashboard</h1>
      </NavLink>
      <NavLink to="/signup">
        <h1 className="h1-second">Developer Dashboard</h1>
      </NavLink>
    </div>
  );
}

export default Home;
