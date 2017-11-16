import AppDispatcher from './AppDispatcher';



export const updateNumberOfPeople = (value) => {
  const action = { type: 'UPDATE_NUMBER_OF_PEOPLE', value };
  AppDispatcher.dispatch(action);
}

export const updateSlicesPerPerson = (value) => {
  AppDispatcher.dispatch({
    type: 'UPDATE_SLICES_PER_PERSON',
    value
  });
}

export const reset = () => {
  AppDispatcher.dispatch({ type: 'RESET' });
}
