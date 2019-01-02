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

  state = {
    'sideBarToggled': false
  };

  toggleSideBar = () => {
    this.setState({'sideBarToggled': !this.state.sideBarToggled});
    console.log('toggled!');
  }

  render () {
    return (
      <div className="App">
        <Navbar sideBar={this.toggleSideBar} />
        <Body>
          <Sidebar key="Sidebar" toggled={this.state.sideBarToggled} />
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
