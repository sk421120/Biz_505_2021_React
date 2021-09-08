/*
다수의 컴포넌트를 통합관리하기
index.js파일을 만들고
현재 폴더에 있는 모든 컴포넌트를 import
*/
import Header from "./Header";
import RemBody from "./RemBody";
import Footer from "./Footer";
import RemList from "./RemList";

// import 된 컴포넌트를 변수(객체)로 export
export { Header, Footer, RemBody, RemList };

// import { 사용할 컴포넌트들 } from "Index"와 같이 사용할 수 있다
