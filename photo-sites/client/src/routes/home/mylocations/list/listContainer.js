import React, { Component } from 'react';
import ListComponent from "./listComponent";

class ListContainer extends Component {
  render() {
    return (
      <div className="col-md-12 theGallery">
        <ListComponent />
      </div>
    );
  }
}

export default ListContainer;