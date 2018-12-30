import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
