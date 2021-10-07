import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";
import "../modules/fetchModule.js";
import { fetchLogout } from "../modules/fetchModule.js";

export default function Logout() {
  const history = useHistory();
  const { setUser } = useUserContext();
  const fetchCb = useCallback(async () => {
    await fetchLogout();
    await setUser([]);
    history.replace("/");
  }, [setUser]);

  // 페이지가 열리려고 시도되면 자동으로 실행하도록
  useEffect(fetchCb, [fetchCb]);
  return <div></div>;
}
