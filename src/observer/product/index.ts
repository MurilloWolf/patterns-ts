import { ConcreteObserver } from "./observer";
import { ConcreteSubject } from "./subject";

const subject = new ConcreteSubject("Nike air");

const obs1 = new ConcreteObserver("OBSERVADOR 1");
const obs2 = new ConcreteObserver("OBSERVADOR 2");
const obs3 = new ConcreteObserver("OBSERVADOR 3");

subject.add(obs1);
subject.add(obs2);
subject.add(obs3);

subject.setState("on stock");
