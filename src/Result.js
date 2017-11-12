import React from 'react';

const Result = ({ amount }) => {
  const pizzas = amount === 1 ? 'pizza' : 'pizzas';
  return (
    <p>
      You will need to order {amount} {pizzas}.
    </p>
  );
};

export default Result;
