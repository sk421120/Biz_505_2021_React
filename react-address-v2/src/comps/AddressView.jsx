import React from "react";

function AddressView({ addrList }) {
  const addrBody = addrList.map((addr) => {
    return (
      <div key={addr.u_id}>
        <div>Name : {addr.u_name}</div>
        <div>Address : {addr.u_addr}</div>
        <div>Tel : {addr.u_tel}</div>
        <div>Age : {addr.u_age}</div>
      </div>
    );
  });
  return <div>{addrBody}</div>;
}

export default AddressView;
