import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="App-header">
        <ul>
          <li>
            <NavLink exact className="test" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/poems-list">
              Poems list
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
