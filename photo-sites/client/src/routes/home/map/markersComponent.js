import React, { Component } from 'react';
import MapContainer from "./mapContainer";

import { loadData } from "../../../redux/actions/index";
import { connect } from "react-redux";

class MarkerComponent extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      <div>
        <MapContainer markers={this.props.markers}/>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return state
}

export default connect(mapStateToProps, { loadData })(MarkerComponent);