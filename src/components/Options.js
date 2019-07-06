import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class Options extends Component {
    state = {
        selectedButton: 1
    }
    render() {
        return (
            <div style={{borderRight:'2px solid #d6d6d6'}}>
                <Button disableRipple style={{margin: 10, outline:'none', backgroundColor:`${this.state.selectedButton === 1 ? '#d6d6d6' : 'white'}`}} onClick={() => this.handleClick('main')} id="main"> Main Transport </Button>
                <Button disableRipple style={{margin: 10, outline: 'none', backgroundColor:`${this.state.selectedButton === 2 ? '#d6d6d6' : 'white'}`}} onClick={() => this.handleClick('att')} id='att'> Attractions </Button>
                <Button disableRipple style={{margin: 10, outline: 'none', backgroundColor:`${this.state.selectedButton === 3 ? '#d6d6d6' : 'white'}`}} onClick={() => this.handleClick('tra')} id='tra'> Transportation </Button>
                <Button disableRipple style={{margin: 10, outline: 'none', backgroundColor:`${this.state.selectedButton === 4 ? '#d6d6d6' : 'white'}`}} onClick={() => this.handleClick('acc')} id='acc' > Accomodation </Button>
                <Button disableRipple style={{margin: 10, outline: 'none', backgroundColor:`${this.state.selectedButton === 5 ? '#d6d6d6' : 'white'}`}} onClick={() => this.handleClick('summ')} id='summ' > Summary </Button>
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
                break;
            case('acc'):
                this.setState({selectedButton:4});
                break;
            case('summ'):
                this.setState({selectedButton:5});
                break;             
            default:
                this.setState({selectedButton:null});
        }

    }
}
