import React from 'react';
import { inject, observer } from 'mobx-react';

const Result = inject('calculator')(
  observer(({ calculator }) => {
    const amount = calculator.numberOfPizzasNeeded;
    const pizzas = amount === 1 ? 'pizza' : 'pizzas';
    return (
      <section className="Result">
        <p>
          You will need to order {amount} {pizzas}.
        </p>
      </section>
    );
  }),
);

export default Result;
