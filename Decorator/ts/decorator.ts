interface Componenet {
  getDetails: () => string;
}

// Component
class ProdcutComponent implements Componenet {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  getDetails(): string {
    return `${this.name}`;
  }
}

//Decorator
abstract class ProductDecorator implements Componenet {
  protected componenet: Componenet;
  constructor(componenet: Componenet) {
    this.componenet = componenet;
  }

  public getDetails(): string {
    return this.componenet.getDetails();
  }
}

//Concrete Decorator
class InfoProductDecorator extends ProductDecorator {
  private tradename: string;
  private brand: string;
  constructor(component: Componenet, tradename: string, brand: string) {
    super(component);
    this.brand = brand;
    this.tradename = tradename;
  }

  public getDetails(): string {
    return `${this.tradename} ${this.brand} - ${super.getDetails()}`;
  }
}

//Concrete Decorator 2
class StoreProductDecorator extends ProductDecorator {
  private price: number;
  constructor(component: Componenet, price: number) {
    super(component);
    this.price = price;
  }

  public getDetails(): string {
    return `${super.getDetails()} - price: ${this.price}`;
  }
}

class HTMLProductDecorator extends ProductDecorator {
  public getDetails(): string {
    return `<h1>Informacion del producto</h1>
      <p>
        ${super.getDetails()}
      </p>`;
  }
}

//Execute
const product = new ProdcutComponent("Beer");

// Decorator 1
const info = new InfoProductDecorator(product, "Stella", "German");

//Decorator 2 with decorator 1
const infoStore = new StoreProductDecorator(info, 100);

//Decorator 3 with decorator 2 and 1
const htmlProduct = new HTMLProductDecorator(infoStore);

console.log(info.getDetails());
console.log(infoStore.getDetails());
console.log(htmlProduct.getDetails());
