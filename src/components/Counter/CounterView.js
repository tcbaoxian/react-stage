import React, { Component } from 'react'

class Counter extends Component {
  render() {
    const { increment, decrement, counter } = this.props;
    return (
      <p>
        Clicked: {counter.number} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
      </p>
      );
  }
}

Counter.propTypes = {
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired,
  counter: React.PropTypes.object.isRequired
}

export default Counter
