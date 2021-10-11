import React from "react";
import { useTodoContext } from "../context/AppContextProvider";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList } = useTodoContext();

  const viewList = todoList.map((todo) => {
    return <TodoItem todo={todo} />;
  });
  return <div className="todo_list">
    {todoList.length > 0 ? viewList : <p>Noting todo in List!</p>}</div>;
};

export default TodoList;
