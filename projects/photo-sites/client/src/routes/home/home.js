import React, { Component } from 'react';
import LocationInfoContainer from "./sidebar/locationInfoContainer";
import MarkerComponent from "./map/markersComponent";
import ListContainer from "./mylocations/list/listContainer";

class Home extends Component {
  render() {
    return (
      <div className="row bodyRow">
        <LocationInfoContainer />
        <MarkerComponent />
        <ListContainer />
      </div>
    );
  }
}

export default Home;