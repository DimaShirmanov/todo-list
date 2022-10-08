import React from "react";
import { useAlert } from "react-alert";

import "./Form.scss";

const Form = () => {
  const alert = useAlert();
  const onKeyPressHandler = (e) => {
    if (e.keyCode === 13) {
      alert.show("Oh look, an alert!");
    }
  };
  return (
    <form>
      <div className="form__group">
        <input
          onKeyPress={onKeyPressHandler}
          type="text"
          className="form__control"
          placeholder="Ведите название заметки"
        />
      </div>
    </form>
  );
};

export default Form;
