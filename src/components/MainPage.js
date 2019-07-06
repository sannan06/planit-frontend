import React, { Component } from 'react';
import Topbar from './TopBar';
import Options from './Options';
import Map from './Map';
import MainTrans from './MainTrans';
import Attractions from './Attractions';
import Transportation from './Transportation';
import Summary from './Summary';
import Hotels from './Hotels'
import Itinerary from './Itinerary'
import {Spring} from 'react-spring/renderprops'

export default class MainPage extends Component {
    state = {
        selectedIndex: 1,
        count: 0, 
        hotelCount: 0,
        markerList: [],
        hotelMarkerList: []
    }

    addAttraction = (lat, lng, event) => {
        console.log(lat, lng, event)
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
            console.log(oldMarkerList);
        }
    }
    
    removeAttraction = (i) => {
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

    addHotel = (lat, lng, event) => {
        console.log(lat, lng, event)
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
            oldMarkerList = oldMarkerList.concat({lat: lat, lng: lng, id: this.state.hotelCount + 1, place: event})
            this.setState( {
                hotelCount: this.state.hotelCount + 1,
                hotelMarkerList: oldMarkerList
            })
            console.log(oldMarkerList);
        }
    }
    
    removeHotel = (i) => {
        let oldMarkerList = this.state.hotelMarkerList;
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
            hotelCount: oldMarkerList.length,
            hotelMarkerList: oldMarkerList

        })
    }

    render() {
        
        return (
            <React.Fragment>
                <Topbar />
                <div className="container-fluid" style={{height: '100vh'}}>
                    <div className="row" style={{marginTop:'1rem'}}>
                        <div className="col-7">
                            <div className="row">
                                <div className="col-3">
                                    <Options setIndex={this.setIndex} return={this.props.return}/>
                                </div>
                                <div className="col-9">
                                    <Spring
                                    from={{opacity: 0}}
                                    to={{opacity:(this.state.selectedIndex === 1 ? 1 : 0), display:(this.state.selectedIndex===1?'inline-block':'none')}}>
                                    {props => 
                                        <div style={props}>
                                            <MainTrans />
                                        </div>
                                    }
                                    </Spring>
                                    <Spring
                                    from={{opacity: 0}}
                                    to={{opacity:(this.state.selectedIndex === 2 ? 1 : 0), display:(this.state.selectedIndex===2?'inline-block':'none')}}>
                                    {props => 
                                        <div style={props}>
                                            <Attractions addAttraction = {this.addAttraction}  />
                                        </div>
                                    }
                                    </Spring>
                                    <Spring
                                    from={{opacity: 0}}
                                    to={{opacity:(this.state.selectedIndex === 3 ? 1 : 0), display:(this.state.selectedIndex===3?'inline-block':'none')}}>
                                    {props => 
                                        <div style={props}>
                                            <Transportation /> 
                                        </div>
                                    }
                                    </Spring>
                                    <Spring
                                    from={{opacity: 0}}
                                    to={{opacity:(this.state.selectedIndex === 4 ? 1 : 0), display:(this.state.selectedIndex===4?'inline-block':'none')}}>
                                    {props => 
                                        <div style={props}>
                                            <Hotels addHotel = {this.addHotel}  /> 
                                        </div>
                                    }
                                    </Spring>
                                    <Spring
                                    from={{opacity: 0}}
                                    to={{opacity:(this.state.selectedIndex === 5 ? 1 : 0), display:(this.state.selectedIndex===5?'inline-block':'none')}}>
                                    {props => 
                                        <div style={props}>
                                            <Summary /> 
                                        </div>
                                    }
                                    </Spring>
                                    {/* {this.state.selectedIndex === 2 ? <Attractions addAttraction = {this.addAttraction}  /> : null} */}
                                    {/* {this.state.selectedIndex === 3 ? <Transportation /> : null} */}
                                    {/* {this.state.selectedIndex === 4 ? <Hotels addHotel = {this.addHotel}  /> : null} */}
                                    {/* {this.state.selectedIndex === 5 ? <Summary /> : null} */}
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            { this.state.selectedIndex !== 5 && this.state.selectedIndex !== 3 ? <Map markerList = {this.state.markerList} hotelMarkerList = {this.state.hotelMarkerList} count = {this.state.count} hotelCount = {this.state.hotelCount} removeAttraction = {this.removeAttraction} removeHotel = {this.removeHotel}/>
                            : null }
                            <Spring
                            from={{opacity: 0}}
                            to={{opacity:(this.state.selectedIndex === 5 ? 1 : 0), display:(this.state.selectedIndex===5?'inline-block':'none')}}>
                            {props => 
                                <div style={props}>
                                    <Itinerary />
                                </div>
                            }
                            </Spring>
                            {/* { this.state.selectedIndex === 5 ? <Itinerary /> : null } */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    setIndex = (index) => {
        this.setState({
            selectedIndex: index
        });
    }
}
