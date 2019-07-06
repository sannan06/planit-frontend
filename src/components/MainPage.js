import React, { Component } from 'react';
import Topbar from './TopBar';
import Options from './Options';
import Flights from './Flights';

export default class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Topbar />
                <div className="container-fluid" style={{height: '100vh'}}>
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-4" style={{marginTop: 30}}>
                                    <Options />
                                </div>
                                <div className="col-8" style={{marginTop: 30}}>
                                    <Flights />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
