import React, { Component } from 'react';
import Map from "./Map.js";
import { Marker } from "react-google-maps";

class MapContainer extends Component {
  genMarkers = () => {
    return this.props.markers.data.map((marker)=>{
      return <Marker marker={marker} key={marker._id} id={marker._id} />
    })
  }
  render() {
    console.log(this.props.markers.data)
    return (
      <div className="col-md-8 theMContainer">
      <Map lat={this.props.lat}
                    lng={this.props.lng}
                    handleSet={this.props.setCurrent}
                    selected={this.props.selected}
                    handleAdd={this.props.addMarker}
                    handleDelete={this.props.deleteMarker} 
                    markers={this.genMarkers}
                    containerElement={<div style={{height: "600px", width: "100%"}}></div>}
                    mapElement={<div style={{height: "600px", width: "100%"}}></div>}/>
      </div>
    );
  }
}


export default MapContainer;