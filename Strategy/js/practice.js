


const data = [
  {
    name: 'Erdinger Pikatus',
    country: 'Alemania',
    info: 'Cerveza alemana'
  },
  {
    name: 'Corona',
    country: 'Mexico',
    info: 'Cerveza mexicana'
  },
  {
    name: 'Delirium Tremens',
    country: 'Belgica',
    info: 'Cerveza belga'
  }
];

// Context
class InfoContext {

  constructor(strategy, data, element) {
    this.setStrategy(strategy)

    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element);
  }

}

//Strategies

class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, beer) => {
      return acc + `<div>
        <h2>${beer.name}</h2>
        <p>${beer.country}</p>
      </div>
      <hr>`
    }, '');

  }
}

class DetailedListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, beer) => {
      return acc + `<div>
        <h2>${beer.name}</h2>
        <p>${beer.country}</p>
        <p>${beer.info}</p>
      </div>
      <hr>`
    }, '');
  }
}

class OnlyCountryStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, beer) => {
      return acc + `<div>
        <h2>${beer.country}</h2>
      </div>
      <hr>`
    }, '');
  }
}

const strategies = [
  new ListStrategy(),
  new DetailedListStrategy(),
  new OnlyCountryStrategy()
]

// we can do reference to content by the id without a selector. 
const info = new InfoContext(new ListStrategy(), data, content);
info.show();

// same we can do reference to opt by id withpur a selector.
opt.addEventListener('change', (event) => {
  const op = event.target.value;
  info.setStrategy(strategies[op])
  info.show();
});






