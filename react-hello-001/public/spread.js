const json = {
  name: "corgi",
  addr: "welsh",
  tel: "010-111-2222",
};

console.log(json);

const json1 = { ...json };
console.log(json1);

// json에 담긴 데이터를 json2로 복제하라
// 복제를 하면서 tel 속성의 값만 010-123-4567로 변경하여 저장하라
const json2 = { ...json, tel: "010-123-4567" };
console.log(json2);
