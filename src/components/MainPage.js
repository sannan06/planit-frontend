import React, { Component } from 'react';
import Topbar from './TopBar';
import Options from './Options';
import Flights from './Flights';
import Map from './Map';
import MainTrans from './MainTrans';
import Attractions from './Attractions';
import BackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';



export default class MainPage extends Component {
    state = {
        selectedIndex: 1,
        count: 0, 
        markerList: []
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

    render() {
        
        return (
            <React.Fragment>
                <Topbar />
                <div className="back-button" style={{margin:'0rem 0 0rem 1rem'}}>
                    <div className="row">
                        <IconButton
                        style={{outline: 'none'}}
                        onClick={this.props.return}>
                            <BackIcon style={{fontSize:'3rem', color:'green'}}/>
                        </IconButton>
                        <h2 id="back-text">Back</h2>
                    </div>
                </div>
                <div className="container-fluid" style={{height: '100vh'}}>
                    <div className="row">
                        <div className="col-7">
                            <div className="row">
                                <div className="col-3">
                                    <Options setIndex={this.setIndex}/>
                                </div>
                                <div className="col-9">
                                    {this.state.selectedIndex === 1 ? <MainTrans /> : null}
                                    {this.state.selectedIndex === 2 ? <Attractions addAttraction = {this.addAttraction}  /> : null}
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <Map markerList = {this.state.markerList} count = {this.state.count} removeAttraction = {this.removeAttraction}/>
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
