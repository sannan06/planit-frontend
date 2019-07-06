import React, { Component } from 'react'
import Paris from '../images/timeline.png'
import Marseille from '../images/timeline1.png'
import Lyon from '../images/timeline2.png'

export default class Itinerary extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 id="summary-title">Itinerary</h2>

                <h3 id="subtitle" style={{marginTop:20, textDecoration:'underline'}}>Paris</h3>
                <img src={Paris} alt="Paris Itinerary" style={{width:'80%', height:'auto'}}/>

                <h3 id="subtitle" style={{marginTop:20, textDecoration:'underline'}}>Marseille</h3>
                <img src={Marseille} alt="Paris Itinerary" style={{width:'80%', height:'auto'}}/>

                <h3 id="subtitle" style={{marginTop:20, textDecoration:'underline'}}>Lyon</h3>
                <img src={Lyon} alt="Paris Itinerary" style={{width:'80%', height:'auto'}}/>
            </React.Fragment>
        )
    }
}
