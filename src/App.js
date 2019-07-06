import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import MainPage from  './components/MainPage';

function App() {
  return (
    <React.Fragment>
        { <div id="landing-page-component">
            <LandingPage />
        </div>}
    </React.Fragment>
  );
}

export default App;
