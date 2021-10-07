import "../css/TodoMain.css";

const TodoMain = ({ header, form, children }) => {
  return (
    <div className="todo_main">
      <main className="todo_main_layout">
        <div className="title">{header}</div>
        <section className="form_wrapper">{form}</section>
        <section className="list_wrapper">{children}</section>
      </main>
    </div>
  );
};

export default TodoMain;
