class Form {
  constructor(
    controls, action
  ) {
    this.controls = controls;
    this.action = action;
  }

  getContent() {
    return `<form method="post" action="${this.action}">
    ${this.controls.reduce((content, control) =>
      content + this.getLabel(control) + this.getInput(control)
      , '')}
      <button type="submit">Send</button>
      </form>`
  }

  getLabel(control) {
    return `
    <label>${control.text}</label>
    `;
  }

  getInput(control) {
    return `
    <input type="${control.type}" name="${control.name}" />
    `;
  }
}

// Concrete Builder
class FormBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.actions = '';
    this.controls = [];
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({ name, text, type: 'text' });
    return this;
  }

  setMail(name, text) {
    this.controls.push({ name, text, type: 'email' });
    return this;
  }

  setColor(name, text) {
    this.controls.push({ name, text, type: 'color' });
    return this;
  }

  // This is the method that returns the final object
  build() {
    const form = new Form(this.controls, this.actions);
    this.reset();
    return form;
  }
}

//Director
// Director has a model to build the object and in what order it will have
class FormDirector {
  constructor(formBuilder) {
    this.setBuilder(formBuilder);
  }

  setBuilder(formBuilder) {
    this.formBuilder = formBuilder;
  }

  createPeopleForm() {
    this.formBuilder.reset();
    return formBuilder.setAction('add.php')
      .setText('name', 'Name')
      .setText('LastName', 'Last Name');
  }

  createContactForm() {
    this.formBuilder.reset();
    return formBuilder.setText('name', 'Contact Name')
    .setText('email', 'Email')
    .setText('message', 'Message');
  }
}



const formBuilder = new FormBuilder();
const form = formBuilder.setAction('add.php')
  .setMail('username', 'Username')
  .setText('password', 'Password')
  .setColor('color', 'Color')
  .build();
console.log(form);

form1.innerHTML = form.getContent();


const formEmail = formBuilder.setAction("sendEmail.php").setText('name', 'Nombre').setMail('email', 'Email').build();

form2.innerHTML = formEmail.getContent();

const director = new FormDirector(formBuilder);
director.createPeopleForm()
form3.innerHTML = formBuilder.build().getContent();

director.createContactForm();

form4.innerHTML = formBuilder.build().getContent();