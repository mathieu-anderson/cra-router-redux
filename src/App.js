import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Home from "./containers/Home";
import Nav from "./containers/Nav";
import NumbersList from "./containers/NumbersList";
import Login from "./containers/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/numbers-list" component={NumbersList} />
            <Route exact path="/login" component={Login} />
            <Route
              render={() => {
                return <h1>Page not found :(</h1>;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
