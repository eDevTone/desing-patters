console.log("HOLA MUNDO");

// Interface
interface Product {
  price: number;
  getPrice(): string;
}

class Drinkk implements Product {
  private name: string;
  public price: number = 10;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  info(): string {
    return this.name;
  }

  getPrice(): string {
    return `$${this.price.toString()}`;
  }
}

const drink1 = new Drinkk("Coca Cola", 100);

console.log(drink1.info());


class Beer1 extends Drinkk {
  private alcohol: number;

  constructor(name: string, price: number, alcohol: number) {
    super(name, price);
    this.alcohol = alcohol;
  }

  info(): string {
    return super.info() + " " + this.alcohol;
  }
}

const beer1 = new Beer1("Cerveza", 200,8.5);

console.log(beer1.getPrice());


class Snak implements Product {
  public price: number;

  constructor(price: number) {
    this.price = price;
  }

  public getPrice(): string {
    return `$${this.price.toString()}`;
  }
}

const products: Product[] = [drink1, beer1, new Snak(100)];

console.log('Products', products);