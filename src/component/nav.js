import React from "react";
import { Outlet, Link } from "react-router-dom";
class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              {" "}
              <Link to={`calculator`}>About</Link>
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
            <Link to={`calculator`}>About</Link>
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
            <Link to={`calculator`}>About</Link>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
