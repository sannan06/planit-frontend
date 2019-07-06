import React, { Component } from 'react'
import flightImage from '../images/Capture.PNG'
import { Button } from '@material-ui/core';

export default class Flights extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="flight">
                    <div className="row">
                        <div className="col-9">
                            <img src={flightImage} alt="Emirates Flight" style={{width:'100%', height:'auto'}}/>
                        </div>
                        <div className="col-3">
                            <div className="row justify-content-center" id="flight-price">$1650</div>
                            <div className="row justify-content-center">
                                <button onClick={this.handleClick} type="button" className="btn btn-success">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flight">
                    <div className="row">
                        <div className="col-9">
                            <img src={flightImage} alt="Emirates Flight" style={{width:'100%', height:'auto'}}/>
                        </div>
                        <div className="col-3">
                        <div className="row justify-content-center" id="flight-price">$1849</div>
                            <div className="row justify-content-center">
                                <button onClick={this.handleClick} type="button" className="btn btn-success">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flight">
                    <div className="row">
                        <div className="col-9">
                            <img src={flightImage} alt="Emirates Flight" style={{width:'100%', height:'auto'}}/>
                        </div>
                        <div className="col-3">
                        <div className="row justify-content-center" id="flight-price">$2150</div>
                            <div className="row justify-content-center">
                                <button onClick={this.handleClick} type="button" className="btn btn-success">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flight">
                    <div className="row">
                        <div className="col-9">
                            <img src={flightImage} alt="Emirates Flight" style={{width:'100%', height:'auto'}}/>
                        </div>
                        <div className="col-3">
                        <div className="row justify-content-center" id="flight-price">$1650</div>
                            <div className="row justify-content-center">
                                <button onClick={this.handleClick} type="button" className="btn btn-success">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flight">
                    <div className="row">
                        <div className="col-9">
                            <img src={flightImage} alt="Emirates Flight" style={{width:'100%', height:'auto'}}/>
                        </div>
                        <div className="col-3">
                        <div className="row justify-content-center" id="flight-price">$2200</div>
                            <div className="row justify-content-center">
                                <button onClick={this.handleClick} type="button" className="btn btn-success">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    handleClick = () => {
        // Cotinue after selectiing a flight
    }
}
