import React from "react";
import UUID from "react-uuid";

function AddressInput({ stateGroup }) {
  const { address, setAddress, addrBook, setAddrBook } = stateGroup;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const addrBookInsert = () => {
    if (address.a_name === "" || address.a_tel === "") {
      alert("이름과 전화번호를 입력해주세요!");
      return;
    }
    setAddrBook([...addrBook, { ...address, a_id: UUID() }]);
    setAddress({ ...address, a_name: "", a_addr: "", a_tel: "", a_age: "", a_memo:"" });
  };

  return (
    <div className="addr_input">
      <input
        value={address.a_name}
        name="a_name"
        type="text"
        onChange={onChangeHandler}
        placeholder="이름"
      />
      <input
        value={address.a_addr}
        name="a_addr"
        type="text"
        onChange={onChangeHandler}
        placeholder="주소"
      />
      <input
        value={address.a_tel}
        name="a_tel"
        type="number"
        onChange={onChangeHandler}
        placeholder="전화번호"
      />
      <input
        value={address.a_age}
        name="a_age"
        type="number"
        onChange={onChangeHandler}
        placeholder="나이"
      />
      <input
        value={address.a_memo}
        name="a_memo"
        type="text"
        onChange={onChangeHandler}
        placeholder="메모"
      />
      <button onClick={addrBookInsert}>저장</button>
    </div>
  );
}

export default AddressInput;
