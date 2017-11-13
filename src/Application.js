import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Title from './Title';
import Input from './Input';
import Result from './Result';

const NumberOfPeopleInput = inject('calculator')(
  observer(({ calculator }) => (
    <Input
      label="Number of Guests"
      type="number"
      min={0}
      value={calculator.numberOfPeople}
      onChange={calculator.updateNumberOfPeople}
    />
  )),
);

const SlicesPerPersonInput = inject('calculator')(
  observer(({ calculator }) => (
    <Input
      label="Slices Per Person"
      type="number"
      min={0}
      value={calculator.slicesPerPerson}
      onChange={calculator.updateSlicesPerPerson}
    />
  )),
);

const ResetButton = inject('calculator')(({ calculator }) => (
  <button className="full-width" onClick={calculator.reset}>
    Reset
  </button>
));

export default class Application extends Component {
  render() {
    return (
      <div className="Application">
        <Title />
        <NumberOfPeopleInput />
        <SlicesPerPersonInput />
        <Result />
        <ResetButton />
      </div>
    );
  }
}
