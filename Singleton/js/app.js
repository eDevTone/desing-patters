(() => {

  class Singlenton {

    constructor() {

      this.random = Math.random();
      if (Singlenton.instance) { 
        console.log('Already exists');
        return Singlenton.instance; 
      }

      Singlenton.instance = this;
      console.log('Instance created');
    }

    static getInstance() { 
      return Singlenton.instance;
    }

  }

  const singlenton = new Singlenton();
  const singlenton2 = new Singlenton();
  const singlenton3 = new Singlenton();
  const singlenton4 = new Singlenton();
  const singlenton5 = new Singlenton();

  console.log(singlenton.random);
  console.log(singlenton2.random);
  console.log(singlenton3.random);


})()