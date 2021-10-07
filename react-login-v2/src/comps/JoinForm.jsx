import React, { useRef, useState } from "react";
import "../css/JoinForm.css";
import Button from "../mycustom/Button";
import { fetchJoin } from "../modules/fetchModule.js";
import { useHistory } from "react-router-dom";

const JoinForm = () => {
  const password_check = useRef();
  const input_id = useRef();
  const input_pw = useRef();
  const [joinUser, setJoinUser] = useState({
    userid: "",
    password: "",
    check: "",
    email: "",
  });

  const history = useHistory();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setJoinUser({ ...joinUser, [name]: value });
  };

  const onJoin = async () => {
    // if (user.userid === "") {
    if (!joinUser?.userid) {
      alert("아이디를 입력해주세요!");
      input_id.current.focus();
      return;
    }
    if (!joinUser?.password) {
      alert("비밀번호를 입력해주세요!");
      input_pw.current.focus();
      return;
    }
    if (joinUser.password !== joinUser.check) {
      alert("비밀번호를 다시 입력해주세요!");
      password_check.current.focus();
      return;
    }
    alert("회원가입 성공");

    const joinData = {
      userid: joinUser.userid,
      password: joinUser.password,
      email: joinUser.email,
    };

    const result = fetchJoin(joinData);

    history.push("/login");
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
      {/* <button onClick={onJoin}>JOIN</button> */}
      <Button onClick={onJoin} bgColor="darkorchid">
        JOIN
      </Button>
    </div>
  );
};

export default JoinForm;
