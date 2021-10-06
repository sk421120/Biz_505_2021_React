import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";

export default function Board() {
  const { user, setUser } = useUserContext();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http:/localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        credentials: "include",
      });
      const result = await res.json();
      await setUser(result);
    };
    fetchData();
  }, []);

  if (!user.userid) {
    history.replace("/login");
  }
  return (
    <div>
      <h1>자유게시판</h1>
    </div>
  );
}
