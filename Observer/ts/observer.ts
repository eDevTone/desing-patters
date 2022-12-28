interface IObserver<T> {
  refresh: (value: T) => void;
}

interface ISubject<T> {
  observers: IObserver<T>[];
  subscribe: (observer: IObserver<T>) => void;
  unsubscribe: (observer: IObserver<T>) => void;
  notify: (value: T) => void;
}

class Subject<T> implements Subject<T> {
  private observers!: IObserver<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>) {
    this.observers.push(observer);
  }

  unsubscribe(observer: IObserver<T>) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(value: T) {
    this.observers.forEach((observer) => observer.refresh(value));
  }
}

class Observer<T> implements IObserver<T> {
  private fn: (value: T) => void;

  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }

  public refresh(value: T) {
    this.fn(value);
  }
}

const subject = new Subject<number>();
const subject2 = new Subject<string>();
const obs1 = new Observer<number>((n) => console.log(`Observer 1: ${n}`));
const obs2 = new Observer<string>((n) => console.log(`Observer 2: ${n.toLowerCase()}`));
const obs3 = new Observer<string>((n) => console.log(`Observer 2: ${n.toUpperCase()}`));

subject.subscribe(obs1);
subject.notify(13);
subject.notify(430);

subject2.subscribe(obs2);
subject2.subscribe(obs3);

subject2.notify("Hello World Etone");
