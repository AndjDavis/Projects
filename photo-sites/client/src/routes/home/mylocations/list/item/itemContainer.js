import React, { Component } from 'react';
import ItemComponent from "./itemComponent"

class ItemContainer extends Component {
  render() {
    return (
      <div>
        <ItemComponent />
      </div>
    );
  }
}

export default ItemContainer;