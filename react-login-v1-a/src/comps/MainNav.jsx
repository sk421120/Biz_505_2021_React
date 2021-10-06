import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "../css/MainNav.css";

const MainNav = ({ children, menu_list }) => {
  const align_right = {
    marginLeft: "auto",
  };
  const nav_items = menu_list.map((item) => {
    return (
      <NavLink
        className="nav_item"
        to={item.link}
        key={item.id}
        style={item.align && align_right}
      >
        {item.menu}
      </NavLink>
    );
  });
  return (
    <BrowserRouter>
      <nav className="main_nav">{nav_items}</nav>
      {children}
    </BrowserRouter>
  );
};

export default MainNav;
