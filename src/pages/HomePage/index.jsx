import React from "react";
import Form from "../../components/Form";
import Notes from "../../components/Notes";

import "./index.scss";

const HomePage = () => {
  const notes = new Array(3)
    .fill("")
    .map((_, i) => ({ id: i, title: `Note ${i + 1}` }));
  return (
    <div className="home">
      <Form />
      <Notes notes={notes} />
    </div>
  );
};

export default HomePage;
