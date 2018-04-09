import React, { Component } from 'react';
import Landing from "./landing";
import Location from "./location";
import About from "./about";
import Menu from "./menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Location />
        <About />
        <Menu />
      </div>
    );
  }
}

export default App;
