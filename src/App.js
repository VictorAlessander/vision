import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Sidebar from './components/Sidebar/Sidebar';
import Chart from './components/Chart/Chart';
import Table from './components/Table/Table';
import Cards from './components/Cards/Cards';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Body>
          <Sidebar key="Sidebar" />
          <Cards key="Cards" />
          <Chart key="Chart" />
          <Table key="Table"/>
        </Body>
        <Footer />
      </div>
    );
  }
}

export default App;
