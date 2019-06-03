import React, { Component } from 'react';
import DebitsHistory from '../DebitsHistory/DebitsHistory';
import withDefaultLayout from '../../hoc/Layout';


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

export default withDefaultLayout(Home);