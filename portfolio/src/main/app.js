import React, { Component } from 'react';
import Header from "./header/header";
import SideBar from "./display/sidebar";
import Display from "./display/display";
import Footer from "./display/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row displayRow">
          <SideBar />
          <Display />
        </div>
        <div className="row footerRow">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;