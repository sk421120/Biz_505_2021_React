import React from "react";
import "../css/nav.css";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav className="main_nav">
      <ul>
        <li>
          <NavLink to="/" exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/write" exact>
            WRITE
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            LOGIN
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            JOIN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
