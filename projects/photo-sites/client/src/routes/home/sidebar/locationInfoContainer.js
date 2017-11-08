import React, { Component } from 'react';
import LocationInfoComponent from "./locationInfoComponent"

class LocationInfoContainer extends Component {
  render() {
    return (
      <div className="col-md-4 theSidebar">
        <LocationInfoComponent />
      </div>
    );
  }
}

export default LocationInfoContainer;