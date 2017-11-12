import React, { Component } from 'react';
import { render } from 'react-dom';

import Title from './Title';
import Input from './Input';
import Result from './Result';

import calculatePizzasNeeded from './calculate-pizzas-needed';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class Application extends Component {
  state = {
    numberOfPeople: 10,
    slicesPerPerson: 2,
  };

  updateNumberOfPeople = event => {
    const numberOfPeople = parseInt(event.target.value, 10);
    this.setState({ numberOfPeople });
  };

  updateSlicesPerPerson = event => {
    const slicesPerPerson = parseInt(event.target.value, 10);
    this.setState({ slicesPerPerson });
  };

  render() {
    const { numberOfPeople, slicesPerPerson } = this.state;
    const numberOfPizzas = calculatePizzasNeeded(
      numberOfPeople,
      slicesPerPerson,
    );

    return (
      <div style={styles}>
        <Title />
        <Input
          label="Number of Guests"
          type="number"
          value={numberOfPeople}
          onChange={this.updateNumberOfPeople}
        />
        <Input
          label="Slices Per Person"
          type="number"
          value={slicesPerPerson}
          onChange={this.updateSlicesPerPerson}
        />
        <Result amount={numberOfPizzas} />
      </div>
    );
  }
}

render(<Application />, document.getElementById('root'));
