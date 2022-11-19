import React, { useState } from "react";
import { useAlert } from "react-alert";

import "./CardNote.scss";

const CardNote = ({ todos, setTodos, setViewNote }) => {
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [edit, setEdit] = useState(null);
  const alert = useAlert();

  const editTodos = (id, title, description) => {
    setEdit(id);
    setEditTitle(title);
    setEditDescription(description);
  };

  const saveTodos = (id) => {
    if (editTitle.trim() === "") {
      alert.show(
        <div style={{ color: "yellow" }}>
          Внимание! Введите название заметки
        </div>
      );
    } else {
      let newTodo = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.title = editTitle;
          todo.description = editDescription;
        }
        return todo;
      });
      setTodos(newTodo);
      setEdit(null);
    }
  };

  return (
    <div className="card">
      {todos.map((todo) => (
        <div key={todo.id}>
          {edit === todo.id ? (
            <div className="card__container">
              <p className="card__task-title">Название задачи</p>
              <input
                placeholder="Введите название задачи"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value.slice(0, 60))}
                className="card__edit-title"
                type="text"
              />
            </div>
          ) : (
            <div>
              <p className="card__task-title">Название задачи</p>
              <div className="card__title">{todo.title}</div>
            </div>
          )}
          {edit === todo.id ? (
            <div className="card__container">
              <p className="card__task-description">Описание задачи</p>
              <input
                placeholder="Введите описание задачи"
                value={editDescription}
                onChange={(e) =>
                  setEditDescription(e.target.value.slice(0, 200))
                }
                className="card__edit-description"
                type="text"
              />
              <div>
                <button
                  onClick={() => saveTodos(todo.id)}
                  className="card__save-button"
                >
                  Сохранить
                </button>
                <button
                  onClick={() => setEdit()}
                  className="card__cancel-button"
                >
                  Отмена
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="card__task-description">Описание задачи</p>
              <div className="card__description">{todo.description}</div>
              <button
                className="card__edit-button"
                onClick={() => editTodos(todo.id, todo.title, todo.description)}
              >
                Изменить
              </button>
            </div>
          )}
        </div>
      ))}
      <button onClick={() => setViewNote()} className="card__button-close">
        &times;
      </button>
    </div>
  );
};

export default CardNote;
