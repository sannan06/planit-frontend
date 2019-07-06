import React, { Component } from 'react';
import justtext from '../images/justtext.png';
import SearchBar from './SearchBar'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import { IconButton, TextField } from '@material-ui/core';
import TravellerDetails from './TravellerDetails'

export default class LandingPage extends Component {
    state = {
        selectedOption: null,
        destinations: [1],
        passengers: [1]
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };
    render() {
        const { selectedOption } = this.state;
        
        return (
            <React.Fragment>
                <div className="row justify-content-center" style={{paddingTop:'5vh'}}>
                    <img src = {justtext} className="landing-page-logo" alt="Planit"/>
                </div>
                <div className="row justify-content-center" style={{paddingTop:'2vh'}}>
                    <p id="byline">Plan your trip quicker, easier, and smarter</p>
                </div>
                <Card style={{borderRadius:8}} className="search-card">
                    <CardContent>
                        <h2 id="destinations-title">Pick your destinations</h2>
                        {this.state.destinations.map((item) => 
                            <SearchBar />
                        )}
                        <div className="row">
                            <IconButton style={{outline:'none'}} onClick={this.addCity}>
                                <AddIcon />
                            </IconButton>
                            <p style={{paddingTop:'1rem'}}>Add another city</p>
                        </div>
                        <h2 id="destinations-title" style={{marginTop:'1rem'}}>Traveller Details</h2>
                        {this.state.passengers.map((item) => 
                            <TravellerDetails />
                        )}
                        <div className="row">
                            <IconButton style={{outline:'none'}} onClick={this.addTraveller}>
                                <AddIcon />
                            </IconButton>
                            <p style={{paddingTop:'1rem'}}>Add another traveller</p>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <h2 id="destinations-title" style={{marginTop:'1rem'}}>Departure Date</h2>
                            </div>
                            <div className="col-9">
                                <TextField
                                    id="date"
                                    label="Departure"
                                    type="date"
                                    defaultValue="2019-07-07"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <button id="continue-button" style={{width:'10%', marginLeft:'45%', marginTop:'2rem', marginBottom:'3rem', fontFamily:'Varela', fontWeight:700}} type="button" onClick={this.props.goNext} className="btn btn-light">Continue</button>
            </React.Fragment>
        )
    }

    addCity = () => {
        this.setState({
            destinations: this.state.destinations.concat(1)
        })
    }

    addTraveller = () => {
        this.setState({
            passengers: this.state.passengers.concat(1)
        });
    }

}
