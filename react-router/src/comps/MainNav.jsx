import React from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
  // 컴포넌트 코드에 inline style 생성
  const activeNavStyle = {
    backgroundColor: "cornflowerblue",
    color: "white",
  };
  /*
	  Navigation menu 설정할때
	  Link 또는 NavLink 컴포넌트를 사용한다
	
	  NavLink를 사용하면
	  NavLink에 의해 활성화된 페이지가 열리면
	  menu style을 지정하면 어떤 메뉴가 활성화 된 것인지를 표현할 수 있다
	  activeStyle = {스타일변수}
	  activeClassName = "클래스명"
	  */
  return (
    <ul className="main_menu">
      <li>
        <NavLink to="/" activeStyle={activeNavStyle} exact>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={activeNavStyle}>
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink to="/bbs" activeStyle={activeNavStyle}>
          BOARD
        </NavLink>
      </li>
      <li>
        <input placeholder="Search" />
      </li>
    </ul>
  );
}

export default MainNav;
