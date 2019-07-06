import React, { Component } from 'react'
import justtext from '../images/justtext.png';
import Button from '@material-ui/core/Button';

export default class TopBar extends Component {
    render() {
        return (
            <div className="container-fluid" style={{backgroundImage: 'linear-gradient(to right, #01c026, #03c890)'}}>
                <div className="row">
                    <div className="col-6">
                        <img src={justtext} className="topbar-logo" alt="Planit"/>
                    </div>
                    <div className="col-6">
                        <Button style={{color:'white', position:'absolute', right:10, top:10, outline:'none'}}>
                            Log In
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}
