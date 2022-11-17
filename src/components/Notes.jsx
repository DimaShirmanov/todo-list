import React, { useState } from "react";

import "./Notes.scss";

const Notes = ({todos, setTodos}) => {
  const [editTitle, setEditTitle] = useState("");
  const [edit, setEdit] = useState(null);

  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todoComplated = (id) => {
    let newTodo = [...todos].map((todo) =>
      todo.id !== id ? todo : { ...todo, completed: !todo.completed }
    );
    setTodos(newTodo);
  };

  const editTodos = (id, title) => {
    setEdit(id);
    setEditTitle(title);
  };

  const saveTodos = (id) => {
    let newTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.title = editTitle;
      }
      return todo;
    });
    setTodos(newTodo);
    setEdit(null);
  };

  return (
      <ul className="notelist">
        {todos.map((todo) => (
          <li className="note">
            <div className="left">
              <input
                className="left__checkbox"
                type="checkbox"
                checked={todo.completed}
                onChange={() => todoComplated(todo.id)}
              />
              {edit === todo.id ? (
                <div>
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value.slice(0, 60))}
                    className="left__edit"
                    type="text"
                  />
                </div>
              ) : (
                <div>
                <span className="left__title">{todo.title}</span>
                <div className="left__description" >{todo.description}</div>
                </div>
              )}
            </div>
            {edit === todo.id ? (
              <div>
                <button
                  onClick={() => saveTodos(todo.id)}
                  className="left__save-button"
                >
                  &#10003;
                </button>
                <button
                  onClick={() => setEdit()}
                  className="left__cancel-button"
                >
                  &times;
                </button>
              </div>
            ) : (
              <div className="right">
                <p className="right__date-title">
                  {new Date().toLocaleDateString()}
                </p>
                <button
                  className="right__edit-button"
                  onClick={() => editTodos(todo.id, todo.title)}
                >
                  &#x270e;
                </button>
                <button
                  className="right__delete-button"
                  onClick={() => deleteTodos(todo.id)}
                >
                  &times;
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
  );
};

export default Notes;




