import React, { Component } from 'react'
import flightImage from '../images/Capture.PNG'
import first from '../images/first.PNG'
import second from '../images/second.PNG'
import third from '../images/third.PNG'
import Hotel from '../images/hotel.jpg'
import Hotel2 from '../images/hotel2.jpg'
import Hotel1 from '../images/hotetl1.jpg'
import { Card, CardContent } from '@material-ui/core';

export default class Summary extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 id="summary-title">Trip Summary</h2>

                <h3 id="subtitle" style={{marginTop:20}}>Flights Chosen</h3>
                <div className="row align-items-center">
                        <div className="col-9">
                            <img src={flightImage} alt="Emirates Flight" style={{width:'100%', height:'auto'}}/>
                        </div>
                        <div className="col-3">
                            <div id="flight-price">$1650</div>
                        </div>
                </div>
                <div className="row align-items-center">
                        <div className="col-9">
                            <img src={first} alt="Emirates Flight" style={{width:'100%', height:'auto'}}/>
                        </div>
                        <div className="col-3">
                            <div id="flight-price">$850</div>
                        </div>
                </div>
                <div className="row align-items-center">
                        <div className="col-9">
                            <img src={second} alt="Emirates Flight" style={{width:'100%', height:'auto'}}/>
                        </div>
                        <div className="col-3">
                            <div id="flight-price">$1050</div>
                        </div>
                </div>
                <div className="row align-items-center">
                        <div className="col-9">
                            <img src={third} alt="Emirates Flight" style={{width:'100%', height:'auto'}}/>
                        </div>
                        <div className="col-3">
                            <div id="flight-price">$2050</div>
                        </div>
                </div>
                
                <h3 id="subtitle" style={{marginTop:20}}>Accomodation Chosen</h3>

                <Card id="attractions-card" style={{width: '100%', margin: '0px auto', borderBottom:'1px solid #e6e6e6'}} elevation={5}>
                    <div className="row no-gutters">
                    <div className="col-5">
                        <img src={Hotel} alt="Eiffel Tower" style={{width:'100%', height:'auto'}}/>
                    </div>
                    <div className="col-7">
                        <CardContent>
                            <h3 style={{fontFamily:"'Varela', sans-serif"}}>Four Seasons George V</h3>
                            <p style={{fontFamily:"'Varela', sans-serif"}}><b>Paris</b></p>
                            <p style={{fontFamily:"'Varela', sans-serif"}}><b>Rooms: 2</b> <br/>King Suite<br/>Double Apartment</p>
                            <p style={{fontFamily:"'Varela', sans-serif"}}>Check-in: 2019-07-08 <br/> Check-out:2019-07-09</p> 
                            <p style={{fontFamily:"'Varela', sans-serif"}}>Price: $350</p> 
                        </CardContent>
                    </div>
                    </div>
                </Card>

                <Card id="attractions-card" style={{width: '100%', margin: '1.5rem auto', borderBottom:'1px solid #e6e6e6'}} elevation={5}>
                    <div className="row no-gutters">
                    <div className="col-5">
                        <img src={Hotel1} alt="Eiffel Tower" style={{width:'100%', height:'auto'}}/>
                    </div>
                    <div className="col-7">
                        <CardContent>
                            <h3 style={{fontFamily:"'Varela', sans-serif"}}>Le Petit Nice</h3>
                            <p style={{fontFamily:"'Varela', sans-serif"}}><b>Marseille</b></p>
                            <p style={{fontFamily:"'Varela', sans-serif"}}><b>Rooms: 2</b> <br/>Double Deluxe<br/>Twin Single</p>
                            <p style={{fontFamily:"'Varela', sans-serif"}}>Check-in: 2019-07-10 <br/> Check-out:2019-07-11</p> 
                            <p style={{fontFamily:"'Varela', sans-serif"}}>Price: $249</p> 
                        </CardContent>
                    </div>
                    </div>
                </Card>

                <Card id="attractions-card" style={{width: '100%', margin: '1.5rem auto', borderBottom:'1px solid #e6e6e6'}} elevation={5}>
                    <div className="row no-gutters">
                    <div className="col-5">
                        <img src={Hotel2} alt="Eiffel Tower" style={{width:'100%', height:'auto'}}/>
                    </div>
                    <div className="col-7">
                        <CardContent>
                            <h3 style={{fontFamily:"'Varela', sans-serif"}}>Radison Blu</h3>
                            <p style={{fontFamily:"'Varela', sans-serif"}}><b>Lyon</b></p>
                            <p style={{fontFamily:"'Varela', sans-serif"}}><b>Rooms: 1</b> <br/>Family Suite</p>
                            <p style={{fontFamily:"'Varela', sans-serif"}}>Check-in: 2019-07-12 <br/> Check-out:2019-07-13</p> 
                            <p style={{fontFamily:"'Varela', sans-serif"}}>Price: $299</p> 
                        </CardContent>
                    </div>
                    </div>
                </Card>

                <div className="row">
                    <div className="col-6"><button style={{width:'100%', height:'3rem', fontSize:'1.3rem', fontWeight:700}} type="button" className="btn btn-success">Confirm and Pay</button></div>
                    <div className="col-6"><button style={{width:'100%', height:'3rem', fontSize:'1.3rem', fontWeight:700}} type="button" className="btn btn-secondary">Save for later</button></div>
                </div>
            </React.Fragment>
        )
    }
}
