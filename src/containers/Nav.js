import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends React.Component {
  render() {
    return (
      <div className="App-header">
        <ul>
          <li>
            <NavLink exact activeStyle={{ color: " #b10000" }} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: " #b10000" }} to="/poems-list">
              Poems list
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: " #b10000" }} to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
