//POO 
// Clase
class Drink {
  constructor(name) {
    this.name = name;
  }

  info() {
    return this.name + ' from INFO';
  }
}


// Funcional
function Drink2(name) {
  this.name = name;

  this.info = function() {
    return this.name + ' from INFO';
  }
}


const drink = new Drink('Coca cola');
const drink2 = new Drink2('Pepsi');

console.log(drink2.info());


// Herencia - Inheritance
class Beer extends Drink {
  constructor(name, alcohol) {
    super(name); // Execute the constructor of the parent class
    this.alcohol = alcohol;
  }

  info() {
    return super.info() + ' ' + this.alcohol;
  }
}

const beer = new Beer('Beer', 8.5);
console.log(beer.info());