import React, { Component } from 'react';

import Title from './Title';
import Input from './Input';
import Result from './Result';

import PizzaCalculatorStore from './PizzaCalculatorStore';
import * as actions from './actions';

import calculatePizzasNeeded from './lib/calculate-pizzas-needed';


class PizzaCalculator extends Component {
  render() {
    return (
      <div className="Application">
      <Title />
      <Input
        label="Number of Guests"
        type="number"
        min={0}
        value={this.props.numberOfPeople}
        onChange={this.props.updateNumberOfPeople}
      />
      <Input
        label="Slices Per Person"
        type="number"
        min={0}
        value={this.props.slicesPerPerson}
        onChange={this.props.updateSlicesPerPerson}
      />
      <Result amount={this.props.numberOfPizzas} />
      <button className="full-width" onClick={this.props.reset}>
        Reset
      </button>
    </div>
    );
  }
}

export default class Application extends Component {
  state = PizzaCalculatorStore.getState();

  updateNumberOfPeople = event => {
    const numberOfPeople = parseInt(event.target.value, 10);
    actions.updateNumberOfPeople(numberOfPeople);
  };

  updateSlicesPerPerson = event => {
    const slicesPerPerson = parseInt(event.target.value, 10);
    actions.updateSlicesPerPerson(slicesPerPerson);
  };



  componentDidMount = () => {
    PizzaCalculatorStore.on('change', this.updateState);
  }

  componentWillUnmount = () => {
    PizzaCalculatorStore.off('change', this.updateState);
  }


  updateState = () => {
    this.setState( PizzaCalculatorStore.getState() );
  }



  render() {
    const { numberOfPeople, slicesPerPerson } = this.state;
    const numberOfPizzas = calculatePizzasNeeded(
      numberOfPeople,
      slicesPerPerson,
    );

    return (
      <PizzaCalculator 
        {...this.state}
        numberOfPizzas={numberOfPizzas}
        updateNumberOfPeople={this.updateNumberOfPeople}
        updateSlicesPerPerson={this.updateSlicesPerPerson}
        reset={actions.reset}
      />
    );
  }
}
