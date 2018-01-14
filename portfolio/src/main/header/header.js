import React, { Component } from 'react';
import Navbar from "./navbar/navbar";
import WOW from "wowjs";

class Header extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="row theBanner">
        <Navbar />
        <div className="row theName">
          <h1 className="wow slideInDown">aj davis</h1>
          <h3 className="wow slideInLeft">full stack javascript web development</h3>
        </div>
      </div>


    );
  }
}

export default Header;