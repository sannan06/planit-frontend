import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import MainPage from  './components/MainPage';
import {Spring} from 'react-spring/renderprops'

class App extends React.Component {
    state = {
        showLanding: true
    }

    render() {
    return (
        <React.Fragment>
            
            {/* {this.state.showLanding ? */}
            <Spring
            from={{opacity:0}}
            to={{opacity: (this.state.showLanding ? 1 : 0), display: (this.state.showLanding ? 'inline-block' : 'none') }}>
            {props => 
                <div id="landing-page-component" style={props}>
                    <LandingPage goNext={this.goNext}/>
                </div>
            }  
            </Spring> 
            
            <Spring
            from={{opacity:0}}
            to={{opacity:(!this.state.showLanding ? 1 : 0) }}>
            {props => 
                <div style={props}>
                    <MainPage return={this.returnToLanding}/>
                </div>
            }
            </Spring>
            
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
