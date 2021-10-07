import React from "react";
import { useUserContext } from "../context/UserContextProvider";

export default function Board() {
  const { user } = useUserContext();
  return (
    <div>
      <h1>자유게시판</h1>
      <p>USERID : {user.userid}</p>
    </div>
  );
}
