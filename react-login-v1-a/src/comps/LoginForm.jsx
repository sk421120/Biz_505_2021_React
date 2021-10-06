import React, { useState } from "react";
import { useUserContext } from "../context/UserContextProvider";
import "../css/LoginForm.css";

const LoginForm = () => {
  const { setUser } = useUserContext();
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

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
    const res = await fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
      body: JSON.stringify({
        userid: account.userid,
        password: account.password,
      }),
    });

    // 서버로 부터 정상적인 응답이 오면
    // 실제 서버가 멈춰있는 상태일 경우 res 자체가 undefinded 또는 null 값이다
    // if(res) {} 연산을 하면 res가 정상인지 확인할 수 있다
    // res가 정상이 아닐때는 res.ok 에서 오류가 발생을 한다
    // ES6+ 버전에서 safe null 검사를 수행하는 코드가 있다
    // res가 정상(null, undefined 가 아니면 .ok 속성을 검사하라)
    // null 로 인한 오류를 방지하는 코드다

    console.log("res", res);
    if (res?.ok) {
      const resultUser = await res.json();
      //   const users = await res.json();
      //   console.log("user", account.userid);
      //   const user = users.find((item) => item.userid === account.userid);

      //   console.log("user", user);
      //   if (!user) {
      if (resultUser.userid !== account.userid) {
        alert("No ID");
        return;
      }

      if (resultUser.password !== account.password) {
        alert("Wrong Password");
        return;
      }
      alert("Login!");
      setUser(resultUser);
    }
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
      <button className="btn_login" onClick={onBtnClick}>
        LOGIN
      </button>
    </div>
  );
};

export default LoginForm;
