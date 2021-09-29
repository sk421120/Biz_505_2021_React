import React from "react";
import { NavLink } from "react-router-dom";
import "../css/MainNav.css";

/*
navigation 모양을 디자인한 컴포넌트
*/
const MainNav = () => {
  const activeStyle = {
    backgroundColor: "lightblue",
  };
  return (
    <nav className="main_nav">
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/insert" exact activeStyle={activeStyle}>
        Insert
      </NavLink>
      <NavLink to="/list" exact activeStyle={activeStyle}>
        List View
      </NavLink>
    </nav>
  );
};

export default MainNav;
