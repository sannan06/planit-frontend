import React, { Component } from 'react'
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import fourseasons from '../images/hotel.jpg'
import hilton from '../images/Hilton-Paris-Opera.jpg'
import marriotte from '../images/marriott.jpg'

export default class Hotels extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 id="attractions-title"> Recommended Hotels</h1>

                <Card id="attractions-card" style={{width: '100%', margin: '0px auto', borderBottom:'1px solid #e6e6e6'}} elevation={5}>
                <div className="row no-gutters">
                <div className="col-5">
                    <img src={fourseasons} alt="Four Seasons Hotel George V" style={{width:'100%', height:'auto'}}/>
                </div>
                <div className="col-7">
                    <CardContent>
                        <h3 style={{fontFamily:"'Varela', sans-serif"}}>Four Seasons Hotel George V</h3>
                        <p style={{fontFamily:"'Varela', sans-serif"}}>Ornate, high-end hotel offering elegant rooms and suites, plus renown dining, a chic bar and luxe spa.</p> 
                        <Button size="small" color="primary" className="add-item-button" onClick = {() => this.props.addHotel(48.8688636,  2.2984946, "Four Seasons")}>
                        Add to itinerary
                        </Button>
                    </CardContent>
                </div>
                </div>
                </Card>

                <Card id="attractions-card" style={{width: '100%', margin: '1.5rem auto', borderBottom:'1px solid #e6e6e6'}} elevation={5}>
                <div className="row no-gutters">
                <div className="col-5">
                    <img src={hilton} alt="Disney Land" style={{width:'100%', height:'auto'}}/>
                </div>
                <div className="col-7">
                    <CardContent>
                        <h3 style={{fontFamily:"'Varela', sans-serif"}}>Hilton Paris Opera</h3>
                        <p style={{fontFamily:"'Varela', sans-serif"}}>Elegant lodging with a genteel brasserie and a sleek bar, plus meeting space and a fitness room.</p> 
                        <Button size="small" color="primary" className="add-item-button" onClick = {() => this.props.addHotel(48.8756195, 2.3233473, "Hilton Paris Opera")}>
                        Add to itinerary
                        </Button>
                        
                    </CardContent>
                </div>
                </div>
                </Card>

                <Card id="attractions-card" style={{width: '100%', margin: '1.5rem auto', borderBottom:'1px solid #e6e6e6'}} elevation={5}>
                <div className="row no-gutters">
                <div className="col-5">
                    <img src={marriotte} alt="Louvre" style={{width:'100%', height:'auto'}}/>
                </div>
                <div className="col-7">
                    <CardContent>
                        <h3 style={{fontFamily:"'Varela', sans-serif"}}>Paris Marriott Champs Elysees Hotel</h3>
                        <p style={{fontFamily:"'Varela', sans-serif"}}>Straightforward rooms and suites with flat-screen TVs, plus dining, a bar and fitness facilities.</p> 
                        <Button size="small" color="primary" className="add-item-button" onClick = {() => this.props.addHotel(48.8712134, 2.3028763, "Paris Marriott Champs")}>
                        Add to itinerary
                        </Button>
                    </CardContent>
                </div>
                </div>
                </Card>

            </React.Fragment>
        )
    }
}
