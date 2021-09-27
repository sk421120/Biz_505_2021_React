import React from "react";

function AddressView({ address }) {
  return (
    <div>
      <div>Name : {address.u_name}</div>
      <div>Address : {address.u_addr}</div>
      <div>Tel : {address.u_tel}</div>
      <div>Age : {address.u_age}</div>
    </div>
  );
}

export default AddressView;
