import React, { Component } from 'react'
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import PriusMinivan from '../images/prius-minivan.jpg'
import HondaOdyssey from '../images/honda-odyssey.jpg'
import ToyotaCorolla from '../images/toyota-corolla.jpg'

export default class Transportation extends Component {
    state = {
        selectedButton: 1
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-5"><button id='flt' style={{ backgroundColor: `${this.state.selectedButton === 1 ? '#d6d6d6' : 'white'}` }} className="btn">Rental Cars</button></div>
                        <div className="col-5"><button id='trn' className="btn">Public Transportation</button></div>
                    </div>
                    {this.state.selectedButton === 1}
                </div>
                <h1 id="transportation-title">Transportation for Families</h1>

                <Card id="transportation-card"  style={{width: '100%', margin: '0px auto', borderBottom:'1px solid #e6e6e6'}} elevation={2}>
                    <div className="row no-gutters">
                        <div className="col-5">
                            <img src={PriusMinivan} alt="Prius Minivan" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="col-7">
                            <CardContent>
                                <h3 style={{ fontFamily: "'Varela', sans-serif" }}>Prius Minivan</h3>
                                <p style={{ fontFamily: "'Varela', sans-serif" }}>Body Style: 5-door minivan<br />Capacity: 7 seats<br />Engine: 1.8 L</p>
                                <Button size="small" color="primary" className="add-item-button">
                                    Select
                        </Button>
                            </CardContent>
                        </div>
                    </div>
                </Card>

                <Card id="transportation-card" style={{ width: '100%', margin: '1.5rem auto', borderBottom: '1px solid #e6e6e6' }} elevation={2}>
                    <div className="row no-gutters">
                        <div className="col-5">
                            <img src={HondaOdyssey} alt="Honda Odyssey" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="col-7">
                            <CardContent>
                                <h3 style={{ fontFamily: "'Varela', sans-serif" }}>Honda Odyssey</h3>
                                <p style={{ fontFamily: "'Varela', sans-serif" }}>Body Style: 5-door minivan<br/>Capacity: 7 seats<br/>Engine: 2.4 L</p>
                                <Button size="small" color="primary" className="add-item-button">
                                    Select
                        </Button>
                            </CardContent>
                        </div>
                    </div>
                </Card>

                <Card id="transportation-card" style={{ width: '100%', margin: '1.5rem auto', borderBottom: '1px solid #e6e6e6' }} elevation={2}>
                    <div className="row no-gutters">
                        <div className="col-5">
                            <img src={ToyotaCorolla} alt="Toyota Corolla" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="col-7">
                            <CardContent>
                                <h3 style={{ fontFamily: "'Varela', sans-serif" }}>Toyota Corolla</h3>
                                <p style={{ fontFamily: "'Varela', sans-serif" }}>Body Style: 5-door Sedan<br />Capacity: 5 Seats<br/>Engine: 1.8 L</p>
                                <Button size="small" color="primary" className="add-item-button">
                                    Select
                        </Button>
                            </CardContent>
                        </div>
                    </div>
                </Card>
            </React.Fragment>
        )
    }
}