import React, { Component } from 'react';

import Title from './Title';
import Input from './Input';
import Result from './Result';

import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

import pizzaCalculator from './PizzaCalculatorStore';
import * as actions from './actions';

export default class ApplicationContainer extends Component {
  state = pizzaCalculator.getState();

  updateCalculations = () => {
    this.setState(pizzaCalculator.getState());
  }

  componentDidMount() {
    pizzaCalculator.on('change', this.updateCalculations);
  }

  componentWillUnmount() {
    pizzaCalculator.off('change', this.updateCalculations);
  }

  render() {
    return (
      <PizzaCalculator
        {...this.state}
        updateNumberOfPeople={actions.updateNumberOfPeople}
        updateSlicesPerPerson={actions.updateSlicesPerPerson}
        reset={actions.reset}
      />
    );
  }
}

class PizzaCalculator extends Component {
  updateNumberOfPeople = (event) => {
    const value = parseInt(event.target.value, 10);
    this.props.updateNumberOfPeople(value);
  }

  updateSlicesPerPerson = (event) => {
    const value = parseInt(event.target.value, 10);
    this.props.updateSlicesPerPerson(value);
  }

  reset = () => {
    this.props.reset();
  }

  render() {
    const {
      numberOfPeople,
      slicesPerPerson,
      reset,
    } = this.props;

    const numberOfPizzas = calculatePizzasNeeded(
      numberOfPeople,
      slicesPerPerson,
    );

    return (
      <div className="Application">
        <Title />
        <Input
          label="Number of Guests"
          type="number"
          min={0}
          value={numberOfPeople}
          onChange={this.updateNumberOfPeople}
        />
        <Input
          label="Slices Per Person"
          type="number"
          min={0}
          value={slicesPerPerson}
          onChange={this.updateSlicesPerPerson}
        />
        <Result amount={numberOfPizzas} />
        <button className="full-width" onClick={reset}>
          Reset
        </button>
      </div>
    );
  }
}
