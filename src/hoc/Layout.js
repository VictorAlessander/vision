import React from 'react';
import DefaultLayout from '../components/UI/DefaultLayout/DefaultLayout';

const withDefaultLayout = (WrappedComponent) => {
  return class extends React.PureComponent {
    render () {
      return (
        <DefaultLayout>
          <WrappedComponent />
        </DefaultLayout>
      )
    }
  }
}

export default withDefaultLayout;