import React, { useRef, useState } from "react";
import "../css/JoinForm.css";

const JoinForm = () => {
  const password_check = useRef();
  const input_id = useRef();
  const input_pw = useRef();
  const [user, setUser] = useState({
    userid: "",
    password: "",
    check: "",
    email: "",
  });
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onJoin = () => {
    if (user.userid === "") {
      alert("아이디를 입력해주세요!");
      input_id.current.focus();
      return;
    } else if (user.password === "") {
      alert("비밀번호를 입력해주세요!");
      input_pw.current.focus();
      return;
    } else if (user.password !== user.check) {
      alert("비밀번호를 다시 입력해주세요!");
      password_check.current.focus();
      return;
    }
    alert("회원가입 성공");
  };
  return (
    <div className="join_form">
      <input
        placeholder="ID"
        name="userid"
        onChange={onChangeHandler}
        ref={input_id}
      />
      <input
        placeholder="PASSWORD"
        name="password"
        type="password"
        onChange={onChangeHandler}
        ref={input_pw}
      />
      <input
        placeholder="PASSWORD CHECK"
        name="check"
        type="password"
        ref={password_check}
        onChange={onChangeHandler}
      />
      <input placeholder="E-MAIL" name="email" onChange={onChangeHandler} />
      <button onClick={onJoin}>JOIN</button>
    </div>
  );
};

export default JoinForm;
