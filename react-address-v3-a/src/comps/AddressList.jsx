import React from "react";

function AddressList({ addrBook }) {
  const table_head = ["ID", "NAME", "ADDRESS", "TEL", "AGE"];
  const viewHead = table_head.map((head) => {
    return <th>{head}</th>;
  });
  const viewList = addrBook.map((addr, index) => {
    return (
      <tr key={addr.a_id}>
        <td>{index + 1}</td>
        <td>{addr.a_name}</td>
        <td>{addr.a_addr}</td>
        <td>{addr.a_tel}</td>
        <td>{addr.a_age}</td>
      </tr>
    );
  });
  return (
    <table className="addr_list">
      <thead>
        <tr>
          {addrBook.length < 1 ? (
            <th colSpan="4">등록된 연락처가 없습니다!</th>
          ) : (
            viewHead
          )}
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default AddressList;
