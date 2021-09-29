import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="main_nav">
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/insert" exact>
            Insert
          </NavLink>
        </li>
        <li>
          <NavLink to="/view" exact>
            List View
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
