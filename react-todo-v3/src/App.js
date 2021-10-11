import "./App.css";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
import TodoMain from "./comps/TodoMain";
import { BrowserRouter, Route } from "react-router-dom";
import AppContextProvider from "./context/AppContextProvider";
import Login from "./comps/Login";
function App() {

  return (
    <BrowserRouter>
      <AppContextProvider>
        <Route path="/todo" exact>
            <TodoMain header="TODO LIST" form={<TodoInput />}>
              <TodoList />
            </TodoMain>
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
