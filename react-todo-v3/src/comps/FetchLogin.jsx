import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { useTodoContext } from "../context/AppContextProvider.jsx";
import { fetchUser } from "../modules/fetchModule.js";

export default function FetchLogin({ children }) {
  const history = useHistory();

  const { setUser } = useTodoContext();

  const fetchLogin = useCallback(async () => {
    const resultUser = await fetchUser();
    if (resultUser?.userid) await setUser(resultUser);
    else history.replace("/");
  }, [setUser]);

  useEffect(fetchLogin, [fetchLogin]);

  return <>{children}</>;
}
