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

const greatHotelStyle = {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates
    position: 'absolute',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,
  
    border: '4px solid #32CD32',
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

const HotelMarker = ({ text }) => 
<div style={greatHotelStyle}>
    {text}
</div>;


class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, hotelCount: 0, markerList: [], hotelMarkerList: []}
        
    }

    componentWillReceiveProps(newProps) {
        console.log(this.props.count, this.props.markerList)
        this.setState( {
            hotelCount: newProps.hotelCount,
            count: newProps.count,
            markerList: newProps.markerList,
            hotelMarkerList: newProps.hotelMarkerList
        })
    }

    _removeMarker = (i) => {
        this.props.removeAttraction(i);
    }

    _removeHotelMarker = (i) => {
        this.props.removeHotel(i);
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
    }

    _onClickHotel = ({x, y, lat, lng, event}) => {
        var oldMarkerList = this.state.hotelMarkerList;
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
                hotelMarkerList: oldMarkerList
            })
        }
    }
    static defaultProps = {
        center: [48.8486,  2.5526271242358234],
        zoom: 10
      };

    

  render() {
    
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        
        {this.state.markerList.map((item, i) => (
             <Button key = {i} onClick = { () => {this._removeMarker(i)}}> Remove {item.place} </Button>
         ))}

        {this.state.hotelMarkerList.map((item, i) => (
             <Button key = {i} onClick = { () => {this._removeMarker(i)}}> Remove {item.place} </Button>
         ))}
        <GoogleMapReact
         bootstrapURLKeys={ {key: "AIzaSyAQo5ASGzT4OvIocaKUDJwUlLaVtcitHaQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          //onClick = {this._onClick}
        > 
         {this.state.markerList.map((item, i) => (
            <Marker key = {i} lat = {item.lat} lng = {item.lng} text = {item.id} />
         ))}

        {this.state.hotelMarkerList.map((item, i) => (
            <HotelMarker key = {i} lat = {item.lat} lng = {item.lng} text = {item.id} />
         ))}

         
        
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
