import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import justtext from '../images/justtext.png';
import SearchBar from './SearchBar'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
                <Card className="search-card">
                    <CardContent>
                        <SearchBar />
                        <SearchBar />
                    </CardContent>
                </Card>
                <button onClick={this.props.goNext}>Continue</button>
            </React.Fragment>
        )
    }

}
