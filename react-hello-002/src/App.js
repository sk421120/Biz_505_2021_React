import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Write from "./component/write";
import View from "./component/view";

function App() {
  /*
	friend 객체를 App.js에서 선언하고
	write.js와 view.js에 전파하였다
	App.js에서 생성된, 선언된 값은 write.js와 view.js에서 볼 수있다
	(화면에 그려진다)

	write.js는 보는 것 뿐만 아니라 키보드를 사용하여 값을 입력, 변경 할 수 있어야 한다
	하지만 App.js(부모)로 전달받은 friend 변수는 절대 write.js에서 변경할 수 없다.

	App.js에서 friend 변수를 변경하는 함수를 선언하고 변수와 함수를 함께 write.js에게 전달
	*/
  const [friend, setFriend] = useState({
    f_name: "whalchal",
    f_addr: "sleeppu",
  });

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setFriend({ ...friend, [name]: value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Write friend={friend} onChangeHandle={onChangeHandle} />
        <View friend={friend} />
      </header>
    </div>
  );
}

export default App;
