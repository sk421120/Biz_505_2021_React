import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useTodoContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    // t_id: 0,
    // t_text: "TODO test",
    // t_isComplete: false,
  });
  const [todoList, setTodoList] = useState([]);

  const onChange = (e) => {
    setTodo({
      // todoList 가장 마지막 요소의 t_id값을 추출하여 +1 한 후 현재 id로 심기
      t_id: todoList[todoList.length - 1].t_id + 1,
      t_text: e.target.value,
      t_isComplete: false,
    });
  };

  const onClick = (e) => {
    if (todo.t_text == null || todo.t_text === "") {
      alert("내용을 입력해주세요!");
      return;
    }
    setTodoList([...todoList, todo]);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const completToggle = (id) => {};
  const todoDelete = (id) => {};
  /*
state를 관리하기(추가, 수정, 삭제) 위하여
setState() 반드시 props에 담아서 하위 컴포넌트로 보내야한다

하지만 setState() 는 어디선가 잘못 실행되면 실제 데이터에 문제가 발생할 수 있다

어차피 setState() 는 어딘가에서 발생하는 event handler에서 주로 사용하기 때문에
차라리 event handler를 만들어서 배포하면 setState()가 어디에서 변화되는지,
사용되는지 관리하기가 비교적 용이하다
*/
  const providerData = {
    todo,
    onChange,
    onClick,
    onKeyPress,
    todoList,

    completToggle,
    todoDelete,
  };

  return (
    <AppContext.Provider value={providerData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
