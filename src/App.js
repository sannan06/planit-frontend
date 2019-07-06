import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import MainPage from  './components/MainPage';

class App extends React.Component {
    state = {
        showLanding: true
    }

    render() {
    return (
        <React.Fragment>
            
            {this.state.showLanding ? 
            <div id="landing-page-component">
                <LandingPage goNext={this.goNext}/>
            </div>
            :
            <MainPage return={this.returnToLanding}/>
            }
        </React.Fragment>
    );
    }

    returnToLanding = () => {
        this.setState({
            showLanding: true
        });
    }

    goNext = () => {
        this.setState({
            showLanding: false
        })
    }

}

export default App;
