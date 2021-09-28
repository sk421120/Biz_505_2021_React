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
      alert("error");
      return;
    }
    setAddrBook([...addrBook, { ...address, a_id: UUID() }]);
    setAddress({ ...address, a_name: "", a_addr: "", a_tel: "", a_age: "" });
  };

  return (
    <div className="addr_input">
      <input
        value={address.a_name}
        name="a_name"
        type="text"
        onChange={onChangeHandler}
        placeholder="NAME"
      />
      <input
        value={address.a_addr}
        name="a_addr"
        type="text"
        onChange={onChangeHandler}
        placeholder="ADDRESS"
      />
      <input
        value={address.a_tel}
        name="a_tel"
        type="text"
        onChange={onChangeHandler}
        placeholder="TEL"
      />
      <input
        value={address.a_age}
        name="a_age"
        type="text"
        onChange={onChangeHandler}
        placeholder="AGE"
      />
      <button onClick={addrBookInsert}>SAVE</button>
    </div>
  );
}

export default AddressInput;
