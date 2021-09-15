const express = require("express");
const router = express.Router();
/*
RESTFul
클라이언트에서 요청을 할 때 할일을 프로토콜 method로 분리하기
	CREATE(Insert) : POST로 요청을 하고
	READ(Select) : GET 요청을 하고
	UPDATE : put으로 요청을 하고
	DELETE : delete로 요청을 하고

자원의 명확한 지정
	localhost:3000/book/delete?id=12345 보통 요청을 수행하는데
	localhost:3000/book/12345/delete : RESTFul 에서 할일, 명확하게 설정하기

RESTFul 요청을 처리하기 위해서는 표준 HTML 코드만으로는 연결이 불가능하다
	표준 HTML에서는 POST와 GET은 지원을 하지만 PUT과 DELETE는 지원을 하지 않는다
	PUT과 DELETE를 사용하기 위해서는 Ajax(fetch)와 같은 별도의 도구를 사용해야 한다

React와 API 연동을 할때는 RESTFul 4가지 method를 사용하여 서버를 구축한다.

POST, PUT : 데이터를 body에 담아서 전송
GET, DELETE : 단순히 URL요청만 수행하거나 pathVariable 방식으로 데이터를 전송하여 처리를 수행한다

client에서 요청을 할때 같은 URL을 통하여 method가 다르면 서로 다른 역할을 수행할 수 있기 때문에
서버 코딩을 하는데 다소 부담이 덜 할 수 있다
	localhost:3000/book/delete 를 수행하면
	- 도서정보에서 삭제된 데이터를 나에게 보여달라
		router.get("/book/delete") 로 서버 설정하고
	DELETE localhost:3000/book/delete?id=1 수행하면
	- 도서정보에서 어떤 ID값이 1인 데이터 삭제하라 라고 요청을 할 수 있다
		router.delete("/book/delete")
 */
const retData = [
  {
    b_id: "0001",
    b_title: "Hello",
    b_start_date: "2021-09-15",
    b_end_date: "",
    b_end_check: false,
    b_cancel: false,
  },
  {
    b_id: "0002",
    b_title: "Hi",
    b_start_date: "2021-09-15",
    b_end_date: "",
    b_end_check: false,
    b_cancel: false,
  },
];

router.get("/", (req, res) => {});

/*
POST 로 받는 데이터는 주로 form에 담긴 데이터이다
API Server에서는 fetch() 통하여 데이터를 전달받을 때도 사용한다
request의 body에 담겨서 전달되기 때문에
req.body에서 데이터를 추출하면 된다
*/
router.post("/bucket", (req, res) => {
  const body = req.body;
  console.log("data Insert");
  console.log(body);
  res.send("END");
});

router.put("/bucket", (req, res) => {
  const body = req.body;
  console.log("data Update");
});

// localhost:3000/api/get
router.get("/get", (req, res) => {
  console.log("All Data List");
  res.json(retData);
});

// localhost:3000/api/1/get
router.get("/:id/get", (req, res) => {
  console.log("Select by Id");
  res.json(retData[0]);
});

router.get("/update/:id/:title", (req, res) => {
  const id = req.params.id;
  const title = req.params.title;
  console.log("data", id, title);
  //   res.status(200).end("END")
  /*
Http Status Code
2xx : 정상처리가 되고 데이터를 보낼 준비를 하고 있으니 기다려라
3xx : 조금전에 보내준 결과와 변함이 없으니 그대로 써라, redirect
4xx : 보낸 요청에 문제가 있다
	404 : Not Found
	401, 403 : 권한이 없다
	405 : method 잘못되었다
	400 : 보낸 데이터가 문제가 있다
5xx : Server Internal Error
*/
  res.send("END");
});

router.put("/udate", (req, res) => {});

router.delete("/cancel/:id", (req, res) => {
  const id = req.params.id;
  console.log("data", id);
  //   res.end("END");
  res.json({ title: "END" });
});

module.exports = router;
