import React from 'react';
import '../../styles/sidenav/Side.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {dev} from '../../static/data';
import {useLocation} from 'react-router-dom';

function DevSidebar (){
    const location = useLocation();
return (
    <nav>
    <ul>
      {
        dev.map((item, index) =>{
          return (
            <li>
              <FontAwesomeIcon
                icon={item.icon}
                className={`${
                  location.pathname === item.link ? "active" : null
                } dash-icon`}
                size="lg"
              />
              <Link
                className={`path ${
                  location.pathname === item.link ? "active" : null
                } `}
                to={item.link}
              >
                {item.value}
              </Link>
            </li>
          )
        })
      }
    </ul>
  </nav>
)
}







export default DevSidebar;