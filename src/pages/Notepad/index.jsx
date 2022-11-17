import React from "react";

import "./index.scss";

const Notepad = () => {
  return (
    <div className="notepad">
      <div className="notepad__title">Блокнот</div>
      <textarea className="notepad__textarea" name="" id="" cols="30" rows="10"></textarea>
    </div>
  );
};

export default Notepad;
