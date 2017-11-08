import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="row headerRow">
        <div className="col-md-8">
          <ul className="headerList">
            <li><Link to="/">Home</Link></li>
            <li>My Spots</li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;