import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import MainNav from "./MainNav";
import { Route, useHistory } from "react-router-dom";
import JoinForm from "./JoinForm";
import Notice from "./Notice";
import Board from "./Board";
import { useUserContext } from "../context/UserContextProvider";
import Admin from "./Admin";
import Logout from "./Logout";

export default function MainComp() {
  const { user, setUser } = useUserContext();
  const history = useHistory();
  const menu_list = [
    { id: 0, link: "/", menu: "HOME" },
    { id: 1, link: "/notice", menu: "공지사항" },
    { id: 2, link: "/board", menu: "자유게시판" },
    user?.userid
      ? { id: 3, link: "/logout", menu: "로그아웃", align: true }
      : { id: 3, link: "/login", menu: "로그인", align: true },
    user?.userid
      ? { id: 4, link: "/mypage", menu: "마이페이지" }
      : { id: 4, link: "/join", menu: "회원가입" },
    { id: 5, link: "/admin", menu: "게시판관리" },
  ];
  return (
    <MainNav menu_list={menu_list}>
      <Route path="/" exact>
        <div>HOME</div>
      </Route>
      <Route path="/notice">
        <Notice />
      </Route>
      <Route path="/board">
        <Board />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/join">
        <JoinForm />
      </Route>
      <Route path="/logout" exact>
        <Logout />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </MainNav>
  );
}
