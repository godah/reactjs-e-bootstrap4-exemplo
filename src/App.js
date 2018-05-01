import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './ui/NavBar';
import HomeCard from './ui/HomeCard';
import Home from './container/Home';

class App extends Component {
  render() {
    const logo = 'TrolandoJS';

    return (
      <div className="container">
        <NavBar logo={logo}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
