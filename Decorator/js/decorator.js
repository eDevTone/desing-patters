// Component

// At this moment componenet represents the component that is being decorated and the interface in the diagram
class ProductComponent {
  constructor(name) {
    this.name = name;
  }

  getDetails() {
    return this.name;
  }
}


// Decorator
// This class we never use directly, it is the base class for all decorators
class ProductDecorator {
  constructor(component) {
    this.component = component;
  }

  getDetails() {
    return this.component.getDetails();
  }
}

// Concrete Decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent);

    this.tradename = tradename;
    this.brand = brand;
  }

  getDetails() {
    return `${super.getDetails()} - Commercial Info - Tradename: ${this.tradename} - Brand: ${this.brand}`;
  }
}

// Concrete Decorator 2
class StoreProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent);
    this.price = price;
  }

  getDetails() {
    return `${super.getDetails()} - Store Info - Price: $${this.price}`;
  }
}

//Concrete Decorator 3 
// Multi inheritance is not possible in JS, but we can use decorators to achieve the same result
class HTMLProductDecorator extends ProductDecorator {
  getDetails() {
    return `<h1>Informacion del producto</h1>
    <p>${super.getDetails()}</p>`;
  }
}



// Execution

const productComponent = new ProductComponent('Beer');
console.log(productComponent.getDetails());

//Decorate the component with commercial info
const commercialInfoDecorator = new CommercialInfoProductDecorator(productComponent, 'Heineken Tradeable', 'Heineken');

// Decorate the component with store info
const storeInfoDecorator = new StoreProductDecorator(productComponent, 20.5);

//Decorator 2 with a decorator
//In this part we wrap the decorator with another decorator and functionality is added
const product = new StoreProductDecorator(commercialInfoDecorator, 20.5);
console.log(product.getDetails());

const htmlPrductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlPrductDecorator.getDetails();


console.log(commercialInfoDecorator.getDetails());
console.log(storeInfoDecorator.getDetails());


