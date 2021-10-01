import React from "react";
import { useTodoContext } from "../context/AppContextProvider";
import TodoItem from "./TodoItem";
// import "../css/TodoList.css"

const TodoList = () => {
  const { todoList } = useTodoContext();

  const viewList = todoList.map((todo) => {
    return <TodoItem todo={todo} />;
  });
  return <div className="todo_list">{viewList}</div>;
};

export default TodoList;
