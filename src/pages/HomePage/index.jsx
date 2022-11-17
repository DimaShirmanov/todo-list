import React, {useState} from "react";
import Notes from "../../components/Notes";
import CreateTask from "../../components/CreateTask/CreateTask";

import "./index.scss";

const HomePage = () => {
  const [buttonClick, setButtonClick] = useState(false);
  const [todos, setTodos] = useState([]);

  return (
    <div className="home">
      { buttonClick === true ? <CreateTask todos={todos} setTodos={setTodos} setButtonClick={setButtonClick} /> :
      <div className="create-task">
      <button className="create-task__button" onClick={() => setButtonClick(true)}>+ Добавить задачу</button>
      <Notes todos={todos} setTodos={setTodos} />
      </div>
}
    </div>
  );
};

export default HomePage;
