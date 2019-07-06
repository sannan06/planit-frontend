import React, { Component } from 'react';
import justtext from '../images/justtext.png';

export default class LandingPage extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-center" style={{paddingTop:'5vh', overflow:'hidden'}}>
                    <img src = {justtext} className="landing-page-logo" alt="Planit"/>
                </div>
                <div className="row justify-content-center" style={{paddingTop:'2vh', overflow:'hidden'}}>
                    <p id="byline">Plan your trip quicker, easier, and smarter</p>
                </div>
            </React.Fragment>
        )
    }

}
