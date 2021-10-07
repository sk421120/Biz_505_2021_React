import React, { useState } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";
import "../css/LoginForm.css";
import Button from "../mycustom/Button";
import "../modules/fetchModule.js";
import { fetchLogin } from "../modules/fetchModule.js";

const LoginForm = () => {
  const { setUser } = useUserContext();
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

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
    history.replace("/");
  };
  return (
    <div className="login_form">
      <input
        name="userid"
        placeholder="Please input your ID"
        onChange={onChange}
      />
      <input
        name="password"
        placeholder="Please input your PASSWORD"
        type="password"
        onChange={onChange}
      />
      {/* <button className="btn_login" onClick={onBtnClick}>LOGIN</button> */}
      <Button onClick={onBtnClick} bgColor="darkorchid">
        LOGIN
      </Button>
    </div>
  );
};

export default LoginForm;
