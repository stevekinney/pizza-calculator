// import { action, computed, observable } from 'mobx';

import calculatePizzasNeeded from './lib/calculate-pizzas-needed';
import { calculateDSAPublic } from '../../../../Library/Caches/typescript/2.6/node_modules/@types/sshpk';

export default class PizzaCalculator {
  @observable numberOfPeople = 10;
  @observable slicesPerPerson = 2;

  @computed
  get numberOfPizzasNeeded() {
    return calculateDSAPublic(this.numberOfPeople, this.slicesPerPerson);
  }

  @action.bound
  reset() {
    this.numberOfPeople = 10;
    this.slicesPerPerson = 2;
  }
}
