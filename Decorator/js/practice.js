class ClientComponent {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }

}

// Main Decorator
class ClientDecorator {
  constructor(component) {
    // console.log('Decorator created', component);
    this.component = component;
  }
  async getData() {
    return await this.component.getData();
  }
}
// https://jsonplaceholder.typicode.com/photos

// Decorator 1
class UpperCaseClientDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData();
    return data.map(photo => {
      photo.title = photo.title.toUpperCase();
      return photo;
    });
  }
}

// Decorator 2
class HTMLClientDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData();
    return data.map(photo => ({
      title : `<h1>${photo.title}</h1>`,
      thumbnail : `<img src=${photo.thumbnailUrl}' />`
    }));
  }
}

//IIFE - Immediately Invoked Function Expression
(async () => {
  console.log('Start');
  const client = new ClientComponent('https://jsonplaceholder.typicode.com/photos');
  console.log('Client created');
  const data = await client.getData();
  // console.log(data);
  const upperClient = new UpperCaseClientDecorator(client);

  const data2 = await upperClient.getData();
  console.log(data2);

  const htmlClient = new HTMLClientDecorator(upperClient);
  const htmlClient2 = new HTMLClientDecorator(client);

  const data3 = await htmlClient.getData();
  const dataLowerCase = await htmlClient2.getData();
  console.log();

  divContent1.innerHTML = data3.reduce((acc, el) => acc + el.title + el.thumbnail, '');
  divContent2.innerHTML = dataLowerCase.reduce((acc, el) => acc + el.title + el.thumbnail, '');
  console.log('End');

})();



