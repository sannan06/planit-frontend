import React, { Component } from 'react';
import Topbar from './TopBar';

export default class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Topbar />
                <div className="container-fluid" style={{height: '100vh'}}>
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
