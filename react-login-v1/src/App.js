import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./comps/LoginForm";
import MainNav from "./comps/MainNav";
import { Route } from "react-router-dom";
import JoinForm from "./comps/JoinForm";

function App() {
  const menu_list = [
    { id: 0, link: "/", menu: "HOME" },
    { id: 1, link: "/notice", menu: "공지사항" },
    { id: 2, link: "/board", menu: "자유게시판" },
    { id: 3, link: "/login", menu: "로그인", align: true },
    { id: 4, link: "/join", menu: "회원가입" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MainNav menu_list={menu_list}>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/join">
          <JoinForm />
        </Route>
      </MainNav>
    </div>
  );
}

export default App;
