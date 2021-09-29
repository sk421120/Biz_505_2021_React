import React from "react";

/*
객체지향의 탄생
기존의 잘~~ 만들어진 클래스를 가져다가 마치 부품을 조립하는 방식으로 프로그래밍을 하자
잘~~ 만들어진 클래스가 있는데 기능을 좀 추가하고 싶다 그러면 상속을 받고 일부를 변경하여
내것으로 만들어서 재 사용했다

객체지향의 가장 큰 단점
상속받은 부모 클래스를 잘~~ 알아야 한다
상속받은 부모 클래스가 변경되면 내 클래스도 변경하거나 버려야한다
부모와 자식 클래스간의 결합도가 엄청 높아진다
응집도는 엄청 낮아진다

좋은 모듈은 서로 결합도가 낮고, 응집도는 높아야 된다

이러한 상속으로 단점을 보완하는 디자인패턴 기념이 나오는데 확장이다
파사드 패턴 이라고도 한다

클래스야 내가 객체를 하나 만들었는데 그 객체를 사용하여 네가 일을 대신하고
정확한 처리 결과만 나에게 달라
*/

function MyButton({ onClick, children }) {
  const btnStyle = {
    cursor: "pointer",
    padding: "1rem 2.5rem",
    margin: "10px auto",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "lightskyblue",
    color: "white",
    textShadow: "0px 0px 1px black",
  };
  return (
    <button style={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default MyButton;
