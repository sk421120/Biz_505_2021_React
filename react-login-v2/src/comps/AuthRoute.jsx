/*
로그인을 수행해야 열어 볼 수 있는 페이지들을 통합 관리할 컴포넌트
로그인을 수행해야 접근할 수 있는 Route들을 모아서 관리
*/

import { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";
import { fetchUser } from "../modules/fetchModule";

const AuthRoute = ({ children }) => {
  // <AuthRoute>내용</AuthRoute>

  const { setUser } = useUserContext();

  const history = useHistory();

  const fetchCb = useCallback(async () => {
    const resultUser = await fetchUser();
    if (resultUser?.userid) await setUser(resultUser);
    else history.replace("/login");
  }, [setUser]);

  // 페이지가 열리려고 시도되면 자동으로 실행하도록
  useEffect(fetchCb, [fetchCb]);

  return <>{children}</>;
};

export default AuthRoute;
