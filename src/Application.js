import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Title from './Title';
import Input from './Input';
import Result from './Result';

@observer
export default class Application extends Component {
  render() {
    const { calculator } = this.props;

    return (
      <div className="Application">
        <Title />
        <Input
          label="Number of Guests"
          type="number"
          min={0}
          value={calculator.numberOfPeople}
          onChange={event =>
            (calculator.numberOfPeople = parseInt(event.target.value, 10))}
        />
        <Input
          label="Slices Per Person"
          type="number"
          min={0}
          value={calculator.slicesPerPerson}
          onChange={event =>
            (calculator.slicesPerPerson = parseInt(event.target.value, 10))}
        />
        <Result amount={calculator.numberOfPizzasNeeded} />
        <button className="full-width" onClick={calculator.reset}>
          Reset
        </button>
      </div>
    );
  }
}
