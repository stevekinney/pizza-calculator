import React, { Component } from 'react';

import Title from './Title';
import Input from './Input';
import Result from './Result';

import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2,
};

class PizzaCalculator extends Component {
  render() {
    const {
      numberOfPeople,
      updateNumberOfPeople,
      slicesPerPerson,
      updateSlicesPerPerson,
      reset,
      numberOfPizzas,
    } = this.props;
    return (
      <div className="Application">
        <Title />
        <Input
          label="Number of Guests"
          type="number"
          min={0}
          value={numberOfPeople}
          onChange={updateNumberOfPeople}
        />
        <Input
          label="Slices Per Person"
          type="number"
          min={0}
          value={slicesPerPerson}
          onChange={updateSlicesPerPerson}
        />
        <Result amount={numberOfPizzas} />
        <button className="full-width" onClick={reset}>
          Reset
        </button>
      </div>
    );
  }
}

const WithPizzaCalculations = WrappedComponent => {
  return class extends Component {
    static displayName = `WithPizzaCalculations(${WrappedComponent.displayName || WrappedComponent.name })`;
    state = { ...initialState };

    updateNumberOfPeople = event => {
      const numberOfPeople = parseInt(event.target.value, 10);
      this.setState({ numberOfPeople });
    };

    updateSlicesPerPerson = event => {
      const slicesPerPerson = parseInt(event.target.value, 10);
      this.setState({ slicesPerPerson });
    };

    reset = event => {
      this.setState({ ...initialState });
    };

    render() {
      const { numberOfPeople, slicesPerPerson } = this.state;
      const numberOfPizzas = calculatePizzasNeeded(
        numberOfPeople,
        slicesPerPerson,
      );

      return (
        <WrappedComponent
          numberOfPeople={numberOfPeople}
          updateNumberOfPeople={this.updateNumberOfPeople}
          slicesPerPerson={slicesPerPerson}
          updateSlicesPerPerson={this.updateSlicesPerPerson}
          numberOfPizzas={numberOfPizzas}
          reset={this.reset}
        />
      );
    }
  };
};

const PizzaContainer = WithPizzaCalculations(PizzaCalculator);

export default class Application extends Component {
  render() {
    return <PizzaContainer />;
  }
}
