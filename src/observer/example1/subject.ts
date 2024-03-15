import { Observer } from "./observer";

export interface Subject {
  observers: Observer[];
  add: (observer: Observer) => void;
  remove: (observer: Observer) => void;
  notify: () => void;
}

export class ConcreteSubject implements Subject {
  observers: Observer[];
  constructor() {
    this.observers = [];
  }
  add(observer: Observer) {
    this.observers.push(observer);
  }

  remove(observer: Observer) {
    const filtered = this.observers.filter((obs) => obs !== observer);

    this.observers = filtered;
  }
  notify() {
    this.observers.forEach((ob) => ob.update());
  }
}
