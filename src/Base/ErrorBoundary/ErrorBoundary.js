import React from 'react';
import { Process } from './Process/Connector';
import Error from './Error/Connector';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error) {
    this.setState({ hasError: error });

    return (
      <Error />
    )
  }

  render() {
    if (this.state.hasError) return <Error />

    return (
      <Process />
    );
  }
}