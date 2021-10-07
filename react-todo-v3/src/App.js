import "./App.css";
import FetchLogin from "./comps/FetchLogin";
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
          <FetchLogin>
            <TodoMain header="TODO LIST" form={<TodoInput />}>
              <TodoList />
            </TodoMain>
          </FetchLogin>
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
