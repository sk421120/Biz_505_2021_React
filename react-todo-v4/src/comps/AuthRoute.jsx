import { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context";
import { fetchUser } from "../modules/fetchModule";

function AuthRoute({ children }) {
  const { setUser } = useUserContext();
  const history = useHistory();

  const fetchCallBack = useCallback(async () => {
    const resultUser = await fetchUser();
    if (!resultUser?.userid) history.replace("/login");
    await setUser(resultUser);
  });

  useEffect(fetchCallBack, [fetchCallBack]);

  return <>{children}</>;
}

export default AuthRoute;
