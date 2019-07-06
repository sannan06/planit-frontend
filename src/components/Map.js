import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Button } from '@material-ui/core';

const K_WIDTH = 30;
const K_HEIGHT = 30;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '4px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 15,
  fontWeight: 'bold',
  padding: 3
};

const Marker = ({ text }) => 
<div style={greatPlaceStyle}>
    {text}
</div>;

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, markerList: []}
        
    }
    _removeMarker = (i) => {
        let oldMarkerList = this.state.markerList;
        console.log("index is", i);
        console.log("before", oldMarkerList);
        oldMarkerList = oldMarkerList.slice(0, i).concat(oldMarkerList.slice(i + 1));
        console.log("after", oldMarkerList);
        let k = 1;
        for(let j = 0; j < oldMarkerList.length; ++j) {
            oldMarkerList[j].id = k;
            k++;

        }
        this.setState( {
            count: oldMarkerList.length,
            markerList: oldMarkerList

        })
    }
    _onClick = ({x, y, lat, lng, event}) => {
        var oldMarkerList = this.state.markerList;
        var existFlag = false;

        if(oldMarkerList.length > 0) { 
            oldMarkerList.forEach(element => {
                if(element.lat === lat && element.lng === lng) {
                    existFlag = true;
                }
            });
        }

        if(!existFlag) {
            oldMarkerList = oldMarkerList.concat({lat: lat, lng: lng, id: this.state.count + 1, place: event})
            this.setState( {
                count: this.state.count + 1,
                markerList: oldMarkerList
            })
        }
        console.log(oldMarkerList);
    }

    static defaultProps = {
        center: [48.859743783016604,  2.3526271242358234],
        zoom: 10
      };

    

  render() {
    
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <Button onClick = { () => {this._onClick({x: 1, y: 1, lat: 48.8584, lng: 2.2945, event: "Eiffel Tower"})}}>Add Eiffel Tower</Button> 
        <Button onClick = { () => {this._onClick({x: 1, y: 1, lat: 48.8672, lng: 2.7838, event: "Disney Land"})}}>Add Disneyland Paris</Button> 
        <Button onClick = { () => {this._onClick({x: 1, y: 1, lat: 48.8606, lng: 2.3376, event: "Louvre"})}}>Add Louvre</Button> 
        {this.state.markerList.map((item, i) => (
             <Button key = {i} onClick = { () => {this._removeMarker(i)}}> Remove {item.place} </Button>
         ))}
        <GoogleMapReact
         bootstrapURLKeys={ {key: "AIzaSyAQo5ASGzT4OvIocaKUDJwUlLaVtcitHaQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick = {this._onClick}
        > 
         {this.state.markerList.map((item, i) => (
            <Marker key = {i} lat = {item.lat} lng = {item.lng} text = {item.id} />
         ))}
        
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;