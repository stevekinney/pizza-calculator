export const updateNumberOfPeople = value => ({
  type: 'UPDATE_NUMBER_OF_PEOPLE',
  value,
});

export const updateSlicesPerPerson = value => ({
  type: 'UPDATE_SLICES_PER_PERSON',
  value,
});

export const reset = () => ({
  type: 'RESET',
});
