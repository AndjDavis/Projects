import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <div className="col-xs-3 theSideBar">
        <div className="row imageRow">
          <img className="theImage col-xs-10 col-xs-offset-1" src="https://i.imgur.com/6PTPQjv.jpg" alt="" />
        </div>

      </div>
    );
  }
}

export default SideBar;