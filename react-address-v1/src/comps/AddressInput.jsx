import React from "react";

function AddressInput({ user, setUser }) {
  const onChangeHandler = (e) => {
    const name = e.target.className;
    const text = e.target.value;
    const _user = { ...user, [name]: text };
    // console.log(name);
    // console.log(text);
    // console.table(_user);
    setUser(_user);
  };
  return (
    <div>
      <input
        className="u_name"
        onChange={onChangeHandler}
        placeholder="NAME"
        value={user.u_name}
      />
      <input
        className="u_addr"
        onChange={onChangeHandler}
        placeholder="ADDRESS"
        value={user.u_addr}
      />
      <input
        className="u_tel"
        onChange={onChangeHandler}
        placeholder="TEL"
        value={user.u_tel}
      />
      <input
        className="u_age"
        onChange={onChangeHandler}
        placeholder="AGE"
        value={user.u_age}
      />
    </div>
  );
}

export default AddressInput;
