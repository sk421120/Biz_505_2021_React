import React from "react";
import { useUserContext } from "../context/UserContextProvider";

export default function Notice() {
  const { user } = useUserContext();
  return (
    <div>
      <h1>공지사항</h1>
      <p>USERID : {user.userid}</p>
    </div>
  );
}
