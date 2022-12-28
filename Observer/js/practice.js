class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observers) {
    this.observers.push(observers);
  }


  unsubscribe(observers) {
    this.observers = this.observers.filter(obs => obs !== observers);
  }

  notify(data) {
    this.observers.forEach(
      (e) => e.refresh(data)
    );
  }
}

// Subject with state
class ItemsSubject extends Subject {

  constructor() {
    super();

    this.data = [];
  }

  add(item) {
    this.data.push(item);
    this.notify(this.data);
  }

}

class HtmlElementObserver {

  constructor(element) {
    this.element = element;
  }

  refresh(data) {
    this.element.innerHTML = data.reduce((acc, d) => {
      return acc + `
      <p>
      ${d}
      </p>
      `
    }, '');
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn;
  }


  refresh(data) {
    this.fn(data);
  }
}



const items = new ItemsSubject();
const div1Obs = new HtmlElementObserver(div1);
const div2Obs = new HtmlElementObserver(div2);

const obs = new Observer(
  (d) => {
    console.log('/Hello world mother fuckers %s Yeah /n', d);
    div3.innerHTML = d.length
  }
);

items.subscribe(div1Obs);
items.subscribe(div2Obs);
items.subscribe(obs);


function add() {
  const name = txtName.value
  items.add(name);
}

