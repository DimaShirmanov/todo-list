import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar navbar__home" to="/">
        Главная
      </Link>
      <Link className="navbar navbar__notepad" to="/notepad">
        Блокнот
      </Link>
      <Link className="navbar navbar__info" to="/info">
        Информация
      </Link>
    </div>
  );
};

export default Navbar;
