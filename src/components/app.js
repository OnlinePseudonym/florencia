import React, { Component } from 'react';
import Nav from "./nav";
import Landing from "./landing";
import Location from './location';
import GoogleMap from './google_map';
import About from "./about";
import Menu from "./menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
        <Location />
        <Menu />
        <About />
      </div>
    );
  }
}

export default App;
