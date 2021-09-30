import { useTodoContext } from "../context/AppContextProvider";
import "../css/TodoInput.css";

const TodoInput = () => {
  const { todo, onChange, onKeyPress, onClick } = useTodoContext();

  return (
    <div className="form">
      <input
        name="t_text"
        placeholder="TODAY TO-DO"
        value={todo.t_text}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <div className="btn_insert" onClick={onClick}>
        ENTER
      </div>
    </div>
  );
};

export default TodoInput;
