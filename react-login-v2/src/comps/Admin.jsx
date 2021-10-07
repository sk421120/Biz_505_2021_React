import React from "react";
import { useUserContext } from "../context/UserContextProvider";
/*
로그인이 되어 있을때만 내용을 확인 할 수 있고 로그인이 되어 있지 않을때는
로그인 페이지로 redirect를 수행하도록 하자
매우 간단한 인증(클라이언트 인증)
1. user state 정보가 있나?
2. 있으면 관리자페이지를 보여주고
3. 없으면 login으로 redirect
=> user state에 있는 사용자 정보가 정말 server에서 인증한 정상 사용자 인가 알수 있는 방법이 없다
이런 상황이 발생하면 매우 보안에 위험한 상태가 된다

다음과 같은 절차를 수행해야 한다( 서버 인증 절차 )
1. 페이지를 선택하면 서버에 query를 전송하여 현재 로그인된 세션이 있는지 확인
2. 로그인 세션이 있으면 세션정보를 (+ 수신하여 다시 ) user에 담고 페이지를 열어 보여주기
3. 로그인된 세션이 없다면 로그인 페이지로 redirect를 수행
*/
export default function Admin({ role }) {
  const { user } = useUserContext();

  // user state 정보가 있으면 관리자 페이지를 보여주기
  return (
    <div>
      <h1>ADMIN</h1>
      {role === "ADMIN" ? (
        <>
          <h3>USER</h3>
          <p>USERID :{user.userid}</p>
        </>
      ) : (
        <p>none</p>
      )}
    </div>
  );
}
