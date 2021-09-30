import React from "react";
import { useTodoContext } from "../context/AppContextProvider";
// import "../css/Todo.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList, setTodoList, todoInsert, completToggle, todoDelete } =
    useTodoContext();

  const viewList = todoList.map((todo) => {
    //   { t_id, t_text, t_isComplete })
    return <TodoItem todo={todo} />;
  });
  return <div className="todo_list">{viewList}</div>;
};

export default TodoList;
