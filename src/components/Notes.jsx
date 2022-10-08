import React from "react";

import "./Notes.scss";

const Notes = ({ notes }) => {
  return (
    <ul className="notelist">
      {notes.map((note) => (
        <li className="notelist__title" key={note.id}>
          {note.title}
          <div className="notelist__date">
            <p className="notelist__datetitle">
              {new Date().toLocaleDateString()}
            </p>
            <button className="notelist__button">&times;</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Notes;
