export interface Observer {
  update: (message: string) => void;
}

export class ConcreteObserver implements Observer {
  name = "";
  constructor(name: string) {
    this.name = name;
  }
  update(message: string) {
    console.log(`Hey ${this.name}: `, message);
  }
}
