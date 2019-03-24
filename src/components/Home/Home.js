import React, { Component } from 'react';
import DebitsHistory from '../DebitsHistory/DebitsHistory';


class Home extends Component {

  render () {
    return (
      <>
        <div>
          <DebitsHistory />
        </div>
      </>
    );
  };
};

export default Home;