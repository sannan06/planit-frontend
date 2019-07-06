import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class Options extends Component {
    state = {
        selectedButton: 1
    }
    render() {
        return (
            <React.Fragment>
                <Button disableRipple style={{margin: 10, outline:'none', backgroundColor:`${this.state.selectedButton === 1 ? '#d6d6d6' : 'white'}`}} onClick={() => this.handleClick('main')} id="main"> Main Transport </Button>
                <Button disableRipple style={{margin: 10, outline: 'none', backgroundColor:`${this.state.selectedButton === 2 ? '#d6d6d6' : 'white'}`}} onClick={() => this.handleClick('att')} id='att'> Attractions </Button>
                <Button disableRipple style={{margin: 10, outline: 'none', backgroundColor:`${this.state.selectedButton === 3 ? '#d6d6d6' : 'white'}`}} onClick={() => this.handleClick('tra')} id='tra'> Transportation </Button>
                <Button disableRipple style={{margin: 10, outline: 'none', backgroundColor:`${this.state.selectedButton === 4 ? '#d6d6d6' : 'white'}`}} onClick={() => this.handleClick('acc')} id='acc' > Accomodation </Button>
            </React.Fragment>
        )
    }

    handleClick = (id) => {
        switch(id){
            case('main'):
                this.setState({selectedButton:1});
                break;
            case('att'):
                this.setState({selectedButton:2});
                break;
            case('tra'):
                this.setState({selectedButton:3});
                break;
            case('acc'):
                this.setState({selectedButton:4});
                break;         
            default:
                this.setState({selectedButton:null});
        }

    }
}
