import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="row navRow">
        <div className="col-sm-4 col-sm-offset-8">
          <ul className="theList">
            <li><Link className="links" to="/about">About</Link></li>
            <li><Link className="links" to="/work">Skills</Link></li>
            <li><Link className="links" to="/contact"><a href="#idofwhereIwantmypagetogo">Contact</a></Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;