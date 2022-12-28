
//Final class
class Person {

  constructor(name, lastName, age, country, city, hobbies) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }

  //Method separator for the design pattern
  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
}

// Concrete Builder
class PersonBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setCountry(country) {
    this.country = country;
    return this;
  }

  setCity(city) {
    this.city = city;
    return this;
  }

  addHobbies(hobbies) {
    this.hobbies.push(hobbies);
    return this;
  }

  build() {
    const person = new Person(
      this.name,
      this.lastName,
      this.age,
      this.country,
      this.city,
      this.hobbies);
    this.reset();
    return person;
  }
}


// Director
class PersonDirector {
  constructor(builder) {
    this.builder = builder;
  }

  buildPerson() {
    return this.builder
      .setName('John')
      .setLastName('Doe')
      .setAge(30)
      .setCountry('USA')
      .setCity('New York')
      .addHobbies('Programming')
      .build();
  }
}


const personBuilder = new PersonBuilder();
// const estebanDirector = new PersonDirector(estebanBuilder);
const esteban = personBuilder.setName('Esteban')
  .setLastName('Quinones')
  .setAge(27)
  .setCountry('Mexico')
  .build();

const juan = personBuilder.setName('Juan')
  .addHobbies('Sleeping')
  .setLastName('Perez')
  .addHobbies('Eating')
  .build();
console.log(juan);

console.log(esteban);