import { Observer } from "./observer";

export interface Subject {
  observers: Observer[];
  add: (observer: Observer) => void;
  remove: (observer: Observer) => void;
  name: string;
  state: string;
  notify: (message: string) => void;
}

export class ConcreteSubject implements Subject {
  observers: Observer[];
  name: string;
  state: string;

  constructor(name: string) {
    this.name = name;
    this.state = "out of stock";
    this.observers = [];
  }

  add(observer: Observer) {
    this.observers.push(observer);
  }

  remove(observer: Observer) {
    const filtered = this.observers.filter((obs) => obs !== observer);

    this.observers = filtered;
  }

  setState(newState: string) {
    this.state = newState;
    if (newState === "on stock") {
      const message = `${this.name} is on stock!`;
      this.notify(message);
    }
  }

  notify(message: string) {
    this.observers.forEach((ob) => ob.update(message));
  }
}
