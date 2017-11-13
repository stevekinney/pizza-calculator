import React from 'react';
import { render } from 'react-dom';

import Application from './Application';
import PizzaCalculator from './pizza-calculator';

import './style.css';

const calculator = new PizzaCalculator();

render(
  <Application calculator={calculator} />,
  document.getElementById('root'),
);
