import getInitialState from './initial-state';
import calculate from './lib/calculate-pizzas-needed';

export default function(state = getInitialState(), action) {
  if (action.type === 'UPDATE_NUMBER_OF_PEOPLE') {
    return {
      ...state,
      numberOfPeople: action.value,
      numberOfPizzasNeeded: calculate(action.value, state.slicesPerPerson),
    };
  }

  if (action.type === 'UPDATE_SLICES_PER_PERSON') {
    return {
      ...state,
      slicesPerPerson: action.value,
      numberOfPizzasNeeded: calculate(state.numberOfPeople, action.value),
    };
  }

  if (action.type === 'RESET') {
    return getInitialState();
  }

  return state;
}
