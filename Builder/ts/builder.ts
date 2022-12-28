interface PersonBuilder {
  name: string;
  lastname: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];
  setName: (name: string) => PersonBuilder;
  setLastname: (lastname: string) => PersonBuilder;
  setAge: (age: number) => PersonBuilder;
  setCountry: (country: string) => PersonBuilder;
  setCity: (city: string) => PersonBuilder;
  addHobbies: (hobby: string) => PersonBuilder;
  build: () => Person;
}

class Person {
  private name: string;
  private lastname: string;
  private age: number;
  private country: string;
  private city: string;
  private hobbies: string[];

  constructor(
    name: string,
    lastname: string,
    age: number,
    country: string,
    city: string,
    hobbies: string[]
  ) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }

  public getFullName(): string {
    return `${this.name} ${this.lastname}`;
  }

  public getHobbies(): string {
    return this.hobbies.join(", ");
  }
}

// We can have as many builders as we wish
class NormalPersonBuilder implements PersonBuilder {
  public name: string;
  public lastname: string;
  public age: number;
  public country: string;
  public city: string;
  public hobbies: string[];

  constructor() {
    this.name = "";
    this.lastname = "";
    this.age = 0;
    this.country = "";
    this.city = "";
    this.hobbies = [];
  }

  reset() {
    this.name = "";
    this.lastname = "";
    this.age = 0;
    this.country = "";
    this.city = "";
    this.hobbies = [];
  }

  setName(name: string): PersonBuilder {
    this.name = name;
    return this;
  }

  setLastname(lastname: string): PersonBuilder {
    this.lastname = lastname;
    return this;
  }

  setAge(age: number): PersonBuilder {
    this.age = age;
    return this;
  }

  setCountry(country: string): PersonBuilder {
    this.country = country;
    return this;
  }

  setCity(city: string): PersonBuilder {
    this.city = city;
    return this;
  }

  addHobbies(hobby: string): PersonBuilder {
    this.hobbies.push(hobby);
    return this;
  }

  build(): Person {
    const person = new Person(
      this.name,
      this.lastname,
      this.age,
      this.country,
      this.city,
      this.hobbies
    );
    this.reset();
    return person;
  }
}

//Director
class PersonDirector {
  constructor(private builder: PersonBuilder) {}

  // We can change the builder at runtime if we want
  setPersonBuilder(builder: PersonBuilder): void {
    this.builder = builder;
  }

  createSimplePerson(name: string, lastname: string): void {
    this.builder.setName(name).setLastname(lastname);
  }
}

// Create a person
const personBuilder = new NormalPersonBuilder();
const person = personBuilder
  .setName("Esteban")
  .setLastname("Quinones")
  .addHobbies("Programming")
  .addHobbies("Learn")
  .setCity("Quertaro")
  .build();

console.log(person);
console.log(person.getFullName());
console.log(person.getHobbies());

// Create with director
const director2 = new PersonDirector(personBuilder); //Object pass by reference
director2.createSimplePerson("John", "Cena");
const johnCena = personBuilder.build();
console.log("Person from director", johnCena);
