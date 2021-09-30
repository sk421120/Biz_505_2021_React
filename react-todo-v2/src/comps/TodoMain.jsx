import AppContextProvider from "../context/AppContextProvider";
import "../css/TodoMain.css";

const TodoMain = ({ header, form, children }) => {
  //   const args = { todo, setTodo, todoList, setTodoList };

  return (
    <div className="todo_main">
      <AppContextProvider>
        <main className="todo_main_layout">
          <div className="title">{header}</div>
          <section className="form_wrapper">{form}</section>
          <section className="list_wrapper">{children}</section>
        </main>
      </AppContextProvider>
    </div>
  );
};

export default TodoMain;
