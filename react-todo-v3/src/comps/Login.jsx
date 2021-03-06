import React, { useState } from "react";
import { useHistory } from "react-router";
import { useTodoContext } from "../context/AppContextProvider.jsx";
import { fetchLogin } from "../modules/fetchModule.js";
import "../css/TodoLogin.css";

export default function Login() {
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const { user, setUser } = useTodoContext();

  const history = useHistory();

  const onChange = (e) =>
    setAccount({ ...account, [e.target.name]: e.target.value });

  const onBtnClick = () => {
    if (account.userid === "" || account.password === "") {
      alert("아이디와 비밀번호를 입력해주세요!");
    } else {
      onLogin();
    }
  };

  const onLogin = async (e) => {
    const { userid, password } = account;
    const result = await fetchLogin(userid, password);
    await setUser(result);
    if (user?.userid) {
      history.replace("/todo");
    }
  };
  return (
    <div className="todo_login">
      <div className="login_title">Login</div>
      <div className="login_wrapper">
        <input name="userid" onChange={onChange} placeholder="ID" />
        <input
          type="password"
          name="password"
          onChange={onChange}
          placeholder="PASSWORD"
        />
        <button className="btn_login" onClick={onBtnClick}>
          LOGIN
        </button>
      </div>
    </div>
  );
}
