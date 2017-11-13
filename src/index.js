import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';

import Application from './Application';
import PizzaCalculator from './pizza-calculator';

import './style.css';

const calculator = new PizzaCalculator();

render(
  <Provider calculator={calculator}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);
