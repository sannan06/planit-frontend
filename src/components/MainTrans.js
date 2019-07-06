import React, { Component } from 'react'
import Flights from './Flights'

export default class MainTrans extends Component {
    state = {
        selectedButton: 1
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3"><button id='flt' onMouseDown={e => e.preventDefault()} onClick={() => this.handleClick('flt')} type="button" style={{backgroundColor:`${this.state.selectedButton===1?'#d6d6d6':'white'}`}} className="btn">Flight</button></div>
                        <div className="col-3"><button id='trn' onMouseDown={e => e.preventDefault()} onClick={() => this.handleClick('trn')} type="button" style={{backgroundColor:`${this.state.selectedButton===2?'#d6d6d6':'white'}`}} disabled className="btn">Train</button></div>
                        <div className="col-3"><button id='bus' onMouseDown={e => e.preventDefault()} onClick={() => this.handleClick('bus')} type="button" style={{backgroundColor:`${this.state.selectedButton===3?'#d6d6d6':'white'}`}} disabled className="btn">Bus</button></div>
                        <div className="col-3"><button id='none' onMouseDown={e => e.preventDefault()} onClick={() => this.handleClick('none')} type="button" style={{backgroundColor:`${this.state.selectedButton===4?'#d6d6d6':'white'}`}} className="btn">None</button></div>
                    </div>
                    {this.state.selectedButton === 1 ? <Flights /> : null}
                    {this.state.selectedButton === 4 ? <h1 id="none-transport">Nothing to select</h1> : null}
                </div>
            </React.Fragment>
        )
    }

    handleClick = (id) => {
        switch(id){
            case('flt'):
                this.setState({selectedButton:1});
                break;
            case('trn'):
                this.setState({selectedButton:2});
                break; 
            case('bus'):
                this.setState({selectedButton:3});
                break;
            case('none'):
                this.setState({selectedButton:4});
                break;        
            default:
                this.setState({selectedButton:null})
        }
    }

}
