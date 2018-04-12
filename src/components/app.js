import React, { Component } from 'react';
import Nav from "./nav";
import Landing from "./landing";
import Location from './location';
import About from "./about";
import MenuTabs from "./menu_tabs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
        <Location />
        <MenuTabs />
        <About />
      </div>
    );
  }
}

export default App;
