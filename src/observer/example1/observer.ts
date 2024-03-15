export interface Observer {
  update: () => void;
}

export class ConcreteObserver implements Observer {
  name = "";
  constructor(name: string) {
    this.name = name;
  }
  update() {
    console.log(`${this.name}: recieve message`);
  }
}
