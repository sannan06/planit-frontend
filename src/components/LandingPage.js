import React, { Component } from 'react';
import justtext from '../images/justtext.png';
import Select from 'react-select';
import SearchBar from './SearchBar'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default class LandingPage extends Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };
    render() {
        const { selectedOption } = this.state;
        
        return (
            <React.Fragment>
                <div className="row justify-content-center" style={{paddingTop:'5vh', overflow:'hidden'}}>
                    <img src = {justtext} className="landing-page-logo" alt="Planit"/>
                </div>
                <div className="row justify-content-center" style={{paddingTop:'2vh', overflow:'hidden'}}>
                    <p id="byline">Plan your trip quicker, easier, and smarter</p>
                </div>
                <SearchBar/>
            </React.Fragment>
        )
    }

}
