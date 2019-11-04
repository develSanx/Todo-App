import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand mx-5" href="/" style={{ color: "green" }}>
        MERN-STACK-TODO APP
      </a>

      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          mx-auto
          <li className="nav-item active mx-auto">
            <Link className="nav-link" to="/">
              Todos <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active mx-auto">
            <Link className="nav-link" to="/create">
              CreateTodo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
