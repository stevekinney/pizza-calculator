import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

const getInitialState = () => {
  const numberOfPeople = 10;
  const slicesPerPerson = 2;
  const numberOfPizzasNeeded = calculatePizzasNeeded(
    numberOfPeople,
    slicesPerPerson,
  );

  return { numberOfPeople, slicesPerPerson, numberOfPizzasNeeded };
};

export default getInitialState;
