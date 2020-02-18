import React from "react"; //, { useState }
import "../css/Header.css";

export default () => {
  return (
    <div className="bg d-flex align-items-center justify-content-center">
      <div className="switch">
        <div className="switch_container">
          <p className="switch_container_text">I am</p>
          <ul className="switch_container_list">
            <li className="switch_container_list_item">geek.</li>
            <li className="switch_container_list_item">web developer.</li>
            <li className="switch_container_list_item">Nathan Van Dyck.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
