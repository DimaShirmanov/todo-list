import React from "react";

import "./Notes.scss";

const Notes = ({ todos, setTodos, viewNoteTodos }) => {
  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todoComplated = (id) => {
    let newTodo = [...todos].map((todo) =>
      todo.id !== id ? todo : { ...todo, completed: !todo.completed }
    );
    setTodos(newTodo);
  };

  return (
    <ul className="notelist">
      {todos.map((todo) => (
        <li className="note" key={todo.id}>
          <div className="left">
            <input
              className="left__checkbox"
              type="checkbox"
              checked={todo.completed}
              onChange={() => todoComplated(todo.id)}
            />
            <div>
              <span className="left__title">{todo.title}</span>
              {todo.description.trim().length > 0 ? (
                <div className="left__description">&#9638;</div>
              ) : (
                <div className="left__description">{todo.description}</div>
              )}
            </div>
          </div>
          <div className="right">
            <p className="right__date-title">
              {new Date().toLocaleDateString()}
            </p>
            <button
              className="right__view-button"
              onClick={() => viewNoteTodos()}
            >
              &#128065;
            </button>
            <button
              className="right__delete-button"
              onClick={() => deleteTodos(todo.id)}
            >
              &times;
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Notes;
