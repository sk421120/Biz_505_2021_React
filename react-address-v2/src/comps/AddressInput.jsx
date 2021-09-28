import React from "react";

function AddressInput({ args }) {
  const { address, setAddress, addrList, setAddrList } = args;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setAddress({ ...address, [name]: value });
    console.table(address);
  };

  const onClickHandler = () => {
    // const _address = { ...address}
    const _address = { ...address, u_id: addrList.length };
    setAddrList([...addrList, _address]);
    console.table(_address);
    console.table(addrList);
  };
  return (
    <div className="input_form">
      <div>
        <label>NAME</label>
        <input name="u_name" type="text" onChange={onChangeHandler} />
      </div>
      <div>
        <label>ADDRESS</label>
        <input name="u_addr" type="text" onChange={onChangeHandler} />
      </div>
      <div>
        <label>TEL</label>
        <input name="u_tel" type="text" onChange={onChangeHandler} />
      </div>
      <div>
        <label>AGE</label>
        <input name="u_age" type="text" onChange={onChangeHandler} />
      </div>
      <button onClick={onClickHandler}>SAVE</button>
    </div>
  );
}

export default AddressInput;
