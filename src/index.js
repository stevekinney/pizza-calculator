import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import getInitialState from './initial-state';
import reducer from './reducer';

import Application from './components/Application';

import './style.css';

const store = createStore(reducer, getInitialState());

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);
