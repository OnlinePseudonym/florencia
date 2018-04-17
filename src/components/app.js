import React, { Component } from 'react';
import Nav from "./nav";
import Landing from "./landing";
import Location from './location';
import About from "./about";
import MenuTabs from "./menu_tabs";
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Landing />
        <Location />
        <MenuTabs />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
