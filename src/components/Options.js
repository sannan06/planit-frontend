import React, { Component } from 'react'
import BackIcon from '@material-ui/icons/ArrowBack';
import ForwardIcon from '@material-ui/icons/ArrowForward';
import { IconButton } from '@material-ui/core';

export default class Options extends Component {
    state = {
        selectedButton: 1
    }
    render() {
        return (
            <div style={{borderRight:'2px solid #d6d6d6'}}>
                <div className="back-button" style={{margin:'0rem 0 0rem 1rem'}}>
                    <div className="row">
                        <IconButton
                        style={{outline: 'none'}}
                        onClick={this.props.return}>
                            <BackIcon style={{fontSize:'3rem', color:'green'}}/>
                        </IconButton>
                        <h2 id="back-text">Back</h2>
                    </div>
                </div>
                <button id='main' onMouseDown={e => e.preventDefault()} onClick={() => this.handleClick('main')} type="button" style={{backgroundColor:`${this.state.selectedButton===1?'#d6d6d6':'white'}`, fontWeight:700}} className="btn">Main Transport</button>
                <button id='att' onMouseDown={e => e.preventDefault()} onClick={() => this.handleClick('att')} type="button" style={{backgroundColor:`${this.state.selectedButton===2?'#d6d6d6':'white'}`, fontWeight:700, marginTop:'0.75rem'}} className="btn">Attractions</button>
                <button id='tra' onMouseDown={e => e.preventDefault()} onClick={() => this.handleClick('tra')} type="button" style={{backgroundColor:`${this.state.selectedButton===3?'#d6d6d6':'white'}`, fontWeight:700, marginTop:'0.75rem'}} className="btn">Transportation</button>
                <button id='acc' onMouseDown={e => e.preventDefault()} onClick={() => this.handleClick('acc')} type="button" style={{backgroundColor:`${this.state.selectedButton===4?'#d6d6d6':'white'}`, fontWeight:700, marginTop:'0.75rem'}} className="btn">Accomodation</button>
                <button id='summ' onMouseDown={e => e.preventDefault()} onClick={() => this.handleClick('summ')} type="button" style={{backgroundColor:`${this.state.selectedButton===5?'#d6d6d6':'white'}`, fontWeight:700, marginTop:'0.75rem'}} className="btn">Summary</button>
                <button style={{fontWeight:700, marginTop:'0.75rem', color:'green'}} className="btn">Marseille <ForwardIcon /></button>
            </div>
        )
    }

    handleClick = (id) => {
        switch(id){
            case('main'):
                this.setState({selectedButton:1});
                this.props.setIndex(1);
                break;
            case('att'):
                this.setState({selectedButton:2});
                this.props.setIndex(2);
                break;
            case('tra'):
                this.setState({selectedButton:3});
                this.props.setIndex(3);
                break;
            case('acc'):
                this.setState({selectedButton:4});
                this.props.setIndex(4);
                break;
            case('summ'):
                this.setState({selectedButton:5});
                this.props.setIndex(5);
                break;             
            default:
                this.setState({selectedButton:null});
        }

    }
}
