import React, { Component } from 'react';
import Header from "./header/header";
import Home from "../routes/home/home.js";
import Contact from "../routes/contact/contact.js";
import About from "../routes/about/about.js";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;