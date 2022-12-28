class SingletonTS {
  private static instance: SingletonTS;
  public random: number;

  private constructor() {
    this.random = Math.random();
  }

  public static getInstance(): SingletonTS {
    if (!this.instance) {
      this.instance = new SingletonTS();
    }

    return this.instance;
  }
}

const single = SingletonTS.getInstance();
const single2 = SingletonTS.getInstance();

console.log(single.random);
console.log(single2.random);
