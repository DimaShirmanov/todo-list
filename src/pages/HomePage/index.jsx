import React, { useState } from "react";
import Notes from "../../components/Notes/Notes";
import CreateTask from "../../components/CreateTask/CreateTask";
import CardNote from "../../components/CardNote/CardNote";

import "./index.scss";

const HomePage = () => {
  const [buttonCreateTaskClick, setButtonCreateTaskClick] = useState(false);
  const [todos, setTodos] = useState([]);
  const [viewNote, setViewNote] = useState(null);

  const handleButtonCreateTaskClick = () => {
    setButtonCreateTaskClick(!buttonCreateTaskClick);
  };

  const viewNoteTodos = (id) => {
    setViewNote(id);
  };

  return (
    <div className="home">
      {buttonCreateTaskClick === true ? (
        <CreateTask
          todos={todos}
          setTodos={setTodos}
          handleButtonCreateTaskClick={handleButtonCreateTaskClick}
        />
      ) : (
        <div>
          {viewNote === todos.id ? (
            <CardNote todos={todos} setTodos={setTodos} />
          ) : (
            <div className="create-task">
              <button
                className="create-task__button"
                onClick={handleButtonCreateTaskClick}
              >
                + Добавить задачу
              </button>
              <Notes
                todos={todos}
                setTodos={setTodos}
                viewNoteTodos={viewNoteTodos}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
