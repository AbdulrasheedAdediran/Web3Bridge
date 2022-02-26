import React from "react";
import "../../styles/topnav/Topnav.css";
import logo from "../../assets/web3bridge.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

 function Header({icon, className}) {
  return (
    <div  className={`top-nav ${className}`}>
      <div className="logo">
        <img src={logo} alt="web3bridge" />
      </div>
      {icon === 1? <div className="log-out">
        <Link to="/login"><FontAwesomeIcon icon={faSignInAlt} size="lg"/></Link>
      </div> : null }
     
    </div>
  );
}

export default Header;
