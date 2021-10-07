import React from "react";

/*
props 전달받은 변수에 기본값을 지정하여 props 값이 전달되지 않더라도
기본을 설정할 수 있도록 기본값 설정하기
*/

export default function Button({
  children,
  bgColor = "black",
  onClick,
  color = "white",
}) {
  const MyButtonStyle = {
    fontSize: "18px",
    fontWeight: "700",
    width: "60%",
    height: "50px",
    lineHeight: "50px",
    margin: "10px auto",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    color: color,
    backgroundColor: bgColor,
  };
  const btnStyle = {
    cursor: "pointer",
    backgroundColor: bgColor,
    color: "white",
    padding: "20px",
  };
  return (
    <button style={MyButtonStyle} onClick={onClick} backgroundColor={bgColor}>
      {children}
    </button>
  );
}
