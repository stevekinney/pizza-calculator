import React from 'react';

const Result = ({ amount }) => {
  const pizzas = amount === 1 ? 'pizza' : 'pizzas';
  return (
    <section className="Result">
      <p>
        You will need to order {amount} {pizzas}.
      </p>
    </section>
  );
};

export default Result;
