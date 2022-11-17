import React, { useState } from "react";
import { useAlert } from "react-alert";

import "./CreateTask.scss";

const CreateTask = ({ todos, setTodos, setButtonClick }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const alert = useAlert();

  const addTodos = () => {
    if (title.trim() === "") {
      alert.show(
        <div style={{ color: "yellow" }}>
          Внимание! Введите название заметки
        </div>
      );
    } else {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          title,
          description,
          completed: false,
        },
      ]);
      setTitle("");
      setDescription("");
      setButtonClick(false);
    }
  };

  return (
    <div className="create-task-wrapper">
      <div className="form">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value.slice(0, 60))}
          type="text"
          className="form__title"
          placeholder="Ведите название задачи"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value.slice(0, 200))}
          className="form__description"
          type="text"
          placeholder="Добавить описание задачи"
        />
        <input
          type="file"
          className="form__add-file"
          multiple
          accept="image/*,image/jpeg"
        />
        <button className="form__add-note" onClick={addTodos}>
          Добавить заметку
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
