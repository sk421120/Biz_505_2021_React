import React from "react";
import "../css/main.css";

import { useCallback } from "react";

const headArray = ["DATE", "TIME", "WRITER", "SUBJECT"];

function BBsMain() {
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
        <tr>
          <td>Today</td>
          <td>Lunch</td>
          <td>Student</td>
          <td>Study</td>
        </tr>
      </tbody>
    </table>
  );
}

export default BBsMain;
