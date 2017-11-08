import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import About from "../../routes/about";
import Contact from "../../routes/contact";
import Home from "../../routes/home";
import Work from "../../routes/work";

class Display extends Component {
  render() {
    return (
      <div id="#idofwhereIwantmypagetogo" className="col-xs-9 theDisplay">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/work" component={Work}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    );
  }
}

export default Display;