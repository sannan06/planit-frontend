import React, { Component } from 'react'
import flightImage from '../images/Capture.PNG'


export default class Summary extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 id="summary-title">Trip Summary</h2>
                <h3 id="subtitle" style={{marginTop:20}}>Flight Chosen</h3>
                <img src={flightImage} alt="Emirates Flight" style={{width:'100%', height:'auto'}}/>
                <h3 id="subtitle" style={{marginTop:20}}>Accomodation Chosen</h3>
            </React.Fragment>
        )
    }
}
