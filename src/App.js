import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img className='App-logo' src={process.env.PUBLIC_URL + '/images/github_logo.png'} alt='under_construction' />
        <p>Site under construction, check back later</p>
        </header>
      </div>
    );
  }
}

export default App;
