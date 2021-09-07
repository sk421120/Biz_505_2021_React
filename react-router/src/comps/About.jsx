import React from "react";

import "../css/about.css";

function About() {
  return (
    <div className="about">
      <h1>Introduction</h1>
      <div>
        <label htmlFor="">NAME</label>
        <span>hello</span>
      </div>
      <div>
        <label htmlFor="">BIRTH</label>
        <span>Happy Happy</span>
      </div>
      <div>
        <label htmlFor="">TEL</label>
        <span>010-1234-4567</span>
      </div>
      <div>
        <label htmlFor="">MAIN SKILL</label>
        <span>Fast Coding, Safe Coding, Clean Coding</span>
      </div>
      <div>
        <label htmlFor="">CODING SKILL</label>
        <span>
          <ul>
            <li>Java</li>
            <li>Spring MVC</li>
            <li>Oracle DBMS</li>
            <li>MySQL DBMS</li>
            <li>HTML5</li>
            <li>CSS2 and CSS3</li>
            <li>MongoDB NoSQL</li>
            <li>React App</li>
            <li>Android App</li>
          </ul>
        </span>
      </div>
    </div>
  );
}

export default About;
