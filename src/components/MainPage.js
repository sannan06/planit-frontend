import React, { Component } from 'react';
import Topbar from './TopBar';
import Options from './Options';
import MainTrans from './MainTrans';
import Attractions from './Attractions'

export default class MainPage extends Component {
    state = {
        selectedIndex: 1
    }
    render() {
        return (
            <React.Fragment>
                <Topbar />
                <div className="container-fluid" style={{height: '100vh'}}>
                    <div className="row">
                        <div className="col-7">
                            <div className="row">
                                <div className="col-3" style={{marginTop: 30}}>
                                    <Options setIndex={this.setIndex}/>
                                </div>
                                <div className="col-9" style={{marginTop: 30}}>
                                    {this.state.selectedIndex === 1 ? <MainTrans /> : null}
                                    {this.state.selectedIndex === 2 ? <Attractions /> : null}
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            {/* Add map here */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    setIndex = (index) => {
        this.setState({
            selectedIndex: index
        });
    }
}
