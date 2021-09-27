import React from "react";

function AddressView({ user }) {
  return (
    <div>
      <div>
        <label>NAME</label>
        <label>{user.u_name}</label>
      </div>
      <div>
        <label>ADDRESS</label>
        <label>{user.u_addr}</label>
      </div>
      <div>
        <label>TEL</label>
        <label>{user.u_tel}</label>
      </div>
      <div>
        <label>AGE</label>
        <label>{user.u_age}</label>
      </div>
    </div>
  );
}

export default AddressView;
