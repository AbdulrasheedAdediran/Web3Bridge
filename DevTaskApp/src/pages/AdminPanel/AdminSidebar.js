import React from "react";
import "../../styles/sidenav/Side.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { navigation } from "../../static/data";
import { useLocation } from "react-router-dom";

function AdminSidebar() {
  const location = useLocation();
  console.log(location);

  return (
    <nav>
      <ul>
        {navigation.map((item, index) => {
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
          );
        })}
      </ul>
    </nav>
  );
}

export default AdminSidebar;
