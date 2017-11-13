import React from 'react';

import Title from './Title';
import NumberOfPeopleInputContainer from '../containers/NumberOfPeopleInputContainer';
import SlicesPerPersonInputContainer from '../containers/SlicesPerPersonInputContainer';
import ResultContainer from '../containers/ResultContainer';
import ResetButtonContainer from '../containers/ResetButtonContainer';

const Application = () => (
  <div className="Application">
    <Title />
    <NumberOfPeopleInputContainer />
    <SlicesPerPersonInputContainer />
    <ResultContainer />
    <ResetButtonContainer />
  </div>
);

export default Application;
