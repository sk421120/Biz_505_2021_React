import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTodoContext } from "../context/AppContextProvider";
import "../css/TodoMain.css";
import { fetchUser } from "../modules/fetchModule";
import Logout from "./Logout";

const TodoMain = ({ header, form, children }) => {
  const history = useHistory();

  const { setUser } = useTodoContext();

  const fetchLogin = useCallback(async () => {
    const resultUser = await fetchUser();
    if (resultUser?.userid) await setUser(resultUser);
    else history.replace("/");
  }, [setUser]);

  useEffect(fetchLogin, [fetchLogin]);
  return (
    <div className="todo_main">
      <main className="todo_main_layout">
        <div className="title">{header}<Logout/></div>
        <section className="form_wrapper">{form}</section>
        <section className="list_wrapper">{children}</section>
      </main>
    </div>
  );
};

export default TodoMain;
