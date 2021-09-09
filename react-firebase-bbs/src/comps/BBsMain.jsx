import React, { useState } from "react";
import "../css/main.css";
import { firestore } from "../config/BBSConfig";

import { useCallback, useEffect } from "react";

const headArray = ["DATE", "TIME", "WRITER", "SUBJECT"];

// else {
// 	setBBsBody([
// 	  <tr>
// 		<td colSpan="4">데이터가 없습니다</td>
// 	  </tr>,
// 	]);
//   }
function BBsMain() {
  const [bbsBody, setBBsBody] = useState([]);

  const firebaseFetch = () => {
    firestore
      .collection("bbs")
      .get()
      .then((bbsList) => {
        // console.table(bbsList);
        // if (bbsList.lenght > 0) {
        bbsList.forEach((bbs) => {
          console.log(bbs.data());
          const bbs_item = bbs.data();
          setBBsBody([
            ...bbsBody,
            <tr>
              <td>{bbs_item.b_date}</td>
              <td>{bbs_item.b_time}</td>
              <td>{bbs_item.b_writer}</td>
              <td>{bbs_item.b_subject}</td>
            </tr>,
          ]);
        });
        // }
      });
  };

  useEffect(firebaseFetch, []);

  const bbs_header = useCallback(() => {
    return headArray.map((text) => {
      return <th>{text}</th>;
    });
  }, []);

  return (
    <table className="bbs_list">
      <thead>
        <tr>{bbs_header()}</tr>
      </thead>
      <tbody>
        {bbsBody}
        {/* <tr>
          <td>Today</td>
          <td>Lunch</td>
          <td>Student</td>
          <td>Study</td>
        </tr> */}
      </tbody>
    </table>
  );
}

export default BBsMain;
