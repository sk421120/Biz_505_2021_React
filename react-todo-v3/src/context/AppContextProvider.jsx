import { createContext, useContext, useRef, useState } from "react";

/**
 * React Context API 기능을 활용하여 state를 관리하는 도구
 *
 * 다중 구조의 컴포넌트가 겹쳐있는 경우 state를 전파하는 것이 매우 불편한 코드로 작성될 수 있다
 *
 * 이럴 때 Context API를 활용하여 state와 공용으로 사용할 여러가지 함수를 Store에 보관하고 필요한 곳에서만
 * useContext()를 사용하여 쉽게 getter할 수 있도록 도와주는 컴포넌트
 *
 * Context 생성하기
 * 생성된 Context에 state 등을 보관하고 useContext() Hook을 Customizing하여 손쉽게 사용할 수 있게 하는 역할 수행
 *
 * Context를 사용할 컴포넌트들을 합성패턴을 이용하여 관리할 수 있도록 한다
 */
// Context 생성
const AppContext = createContext();

// Context의 Store에 보관된 정보들을 추출하기 위한 Hook 함수 선언
// useContext(AppContextProvider) --- 아님!!
export const useTodoContext = () => useContext(AppContext);

// Provider를 합성패턴으로 선언하여 필요한 곳에서 끌어올려 사용할 수 있도록 한다
const AppContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    // t_id: 0,
    // t_text: "TODO test",
    t_comp: false,
  });
  const [todoList, setTodoList] = useState([]);
  const nextId = useRef(0);
  const inputId = useRef();

  // ES6 이후에는 객체에 값을 담을 때 객체의 키 이름과 같은 변수에 담긴 값을 담을 때는
  // Key이름을 한 번만 사용해도 된다.
  const onChange = (e) => {
    const t_text = e.target.value;
    setTodo({ ...todo, t_text });
  };
  const onClick = () => {
    // if (ifNull()) {
    todoInsert();
    // }
  };

  const todoClear = () =>
    setTodo({ t_id: nextId.current, t_text: "", t_comp: false });

  const todoInsert = () => {
    if (todo.t_text == null || todo.t_text === "") {
      alert("할 일을 입력하세요");
      inputId.current.focus();
      return;
    }
    setTodoList([...todoList, { ...todo, t_id: nextId.current }]);
    nextId.current++;
    todoClear();
  };

  //   const ifNull = () => {
  //     if (todo.t_text == null || todo.t_text === "") {
  //       alert("할 일을 입력하세요");
  //       return false;
  //     }
  //     return true;
  //   };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      //   if (ifNull()) {
      todoInsert();
      //   }
    } else if (e.key === "Escape") {
      todoClear();
    }
  };

  const completeToggle = (e) => {
    const id = Number(e.target.dataset.code);

    // 배열요소중에 조건에 맞는 값이 있으면 그 값이 몇번째 요소인지 index를 return한다
    const index = todoList.findIndex((item) => item.t_id === id);
    // 찾았으면
    // 해당요소만 따로 추출하여 selectTodo에 담기
    const selectTodo = todoList[index];
    const _todoList = [...todoList];
    _todoList[index] = {
      ...selectTodo,
      t_comp: !selectTodo.t_comp,
    };
    setTodoList(_todoList);

    alert("complete");
  };

  const onDeleteClick = (e) => {
    //   data-todo-id => target.dataset.todoId
    // todo-id 는 lower Camel case로 변경되어 todoId 변수에서 getter 한다
    const id = e.target.dataset.code;
    if (window.confirm("삭제할까요?")) {
      todoDelete(id);
    }
  };
  const todoDelete = (id) => {
    // 배열요소중에서 t_id 일치하는 요소를 삭제하기
    // 원래 배열요소를 fillering 하는데...
    // t_id값이 dataset의 todoId와 일치하지 않은 것만 새로운 배열로 만들어라
    const _todoList = todoList.filter((item) => item.t_id != id);
    console.table(_todoList);
    setTodoList(_todoList);
    console.table(todoList);
  };

  const providerData = {
    todo,
    todoList,
    inputId,
    onChange,
    onClick,
    onKeyPress,

    completeToggle,
    onDeleteClick,
  };

  return (
    <AppContext.Provider value={providerData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
