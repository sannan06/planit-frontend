import React, { Component } from 'react'
import justtext from '../images/justtext.png';


export default class TopBar extends Component {
    render() {
        return (
            <div className="container-fluid" style={{backgroundImage: 'linear-gradient(to right, #01c026, #03c890)'}}>
                <div className="row">
                    <div className="col-6">
                        <img src={justtext} className="topbar-logo" alt="Planit"/>
                    </div>
                </div>
            </div>
        )
    }
}
