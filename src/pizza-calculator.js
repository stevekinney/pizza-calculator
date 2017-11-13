import { action, computed, observable } from 'mobx';

import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

export default class PizzaCalculator {
  @observable numberOfPeople = 10;
  @observable slicesPerPerson = 2;

  @computed
  get numberOfPizzasNeeded() {
    return calculatePizzasNeeded(this.numberOfPeople, this.slicesPerPerson);
  }

  @action.bound
  updateNumberOfPeople(event) {
    this.numberOfPeople = parseInt(event.target.value, 10);
  }

  @action.bound
  updateSlicesPerPerson(event) {
    this.slicesPerPerson = parseInt(event.target.value, 10);
  }

  @action.bound
  reset() {
    this.numberOfPeople = 10;
    this.slicesPerPerson = 2;
  }
}
