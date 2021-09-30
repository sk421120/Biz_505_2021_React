import "./App.css";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
import TodoMain from "./comps/TodoMain";

function App() {
  return (
    <TodoMain header="TODO LIST" form={<TodoInput />}>
      <TodoList />
    </TodoMain>
  );
}

export default App;
