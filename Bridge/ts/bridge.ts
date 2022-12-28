interface ListImplementor {
  elements: number[];

  add(number: number): void;
  getElements(): number[];
}

class OrderedList implements ListImplementor {
  elements: number[] = [];

  public add(number: number) {
    this.elements.push(number);
    this.elements.sort();
  }

  public getElements(): number[] {
    return this.elements;
  }
}

class UniqueList implements ListImplementor {
  elements: number[] = [];

  public add(number: number) {
    if (!this.elements.includes(number)) this.elements.push(number);
  }

  public getElements(): number[] {
    return this.elements;
  }
}

// Implementation is different, but we can unite it through Abstration
interface DataAbstraction {
  implementor: ListImplementor;
  add(number: number): void;
  get(): number[];
  operation(fn: (n: number) => number): number[];
}

class DataRefinedAbstraction implements DataAbstraction {
  implementor: ListImplementor;

  constructor(implemator: ListImplementor) {
    this.implementor = implemator;
  }

  add(number: number): void {
    this.implementor.add(number);
  }

  get(): number[] {
    return this.implementor.getElements();
  }

  operation(fn: (n: number) => number): number[] {
    return this.implementor.getElements().map(fn);
  }
}

const uniqueData = new DataRefinedAbstraction(new UniqueList());
const orderData = new DataRefinedAbstraction(new OrderedList());

uniqueData.add(3);
uniqueData.add(3);
uniqueData.add(3);
uniqueData.add(2);
uniqueData.add(2);
uniqueData.add(1);

orderData.add(1);
orderData.add(3);
orderData.add(4);
orderData.add(8);
orderData.add(7);
orderData.add(1);

const uniqueItems = uniqueData.operation((e: number) => e * 2);
const orderItems = orderData.operation((e: number) => e * 2);

console.log(uniqueData.get());
console.log(orderData.get());

console.log(uniqueItems);
console.log(orderItems);
