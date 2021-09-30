import React from "react";
import "../css/TodoItem.css";

const TodoItem = ({ todo }) => {
  return (
    <div className="todo_item">
      <div className="todo_delete">&times;</div>
      <div className="todo_text">{todo.t_text}</div>
      <div className="check_mark">&#x2713;</div>
    </div>
  );
};

export default TodoItem;
