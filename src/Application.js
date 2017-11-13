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
          onChange={calculator.updateNumberOfPeople}
        />
        <Input
          label="Slices Per Person"
          type="number"
          min={0}
          value={calculator.slicesPerPerson}
          onChange={calculator.updateSlicesPerPerson}
        />
        <Result amount={calculator.numberOfPizzasNeeded} />
        <button className="full-width" onClick={calculator.reset}>
          Reset
        </button>
      </div>
    );
  }
}
