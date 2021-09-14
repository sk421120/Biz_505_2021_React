import React from "react";
import BuckItem from "./BuckItem";

function BuckList(props) {
  const { bucketList, flag_change, bucket_update, bucket_complete } =
    props.args;

  const buckBody = bucketList.map((bucket) => {
    return <BuckItem args={props.args} bucket={bucket} />;
  });

  return (
    <table className="w3-table w3-table-all w3-margin">
      <thead>
        <tr>
          <th>FLAG</th>
          <th>날짜</th>
          <th>BUCKET</th>
          <th>완료</th>
          <th>취소</th>
        </tr>
      </thead>
      <tbody>{buckBody}</tbody>
    </table>
  );
}

export default BuckList;
