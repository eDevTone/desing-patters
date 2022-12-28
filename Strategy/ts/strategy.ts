interface Strategy {
  login: (user: string, password: string) => boolean;
}

class LoginContext {
  private _strategy!: Strategy;

  public set strategy(strategy: Strategy) {
    this._strategy = strategy;
  }

  constructor(private strategyC: Strategy) {
    this.strategy = strategyC;
  }

  login(user: string, password: string): boolean {
    return this._strategy.login(user, password);
  }
}

class LoginDBStategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log("nos dirigimos a la base de datos");
    if (user === "admin" && password === "admin") {
      return true;
    }
    return false;
  }
}

class LoginServiceStategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log("nos dirigimos a un servicio de autentificacion");
    if (user === "admin" && password === "admin") {
      return true;
    }
    return false;
  }
}

class LoginGoogleStategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log("nos dirigimos a google para la autentificacion");
    if (user === "admin" && password === "admin") {
      return true;
    }
    return false;
  }
}

const auth = new LoginContext(new LoginDBStategy());
auth.strategy = new LoginServiceStategy();
console.log(auth.login("admin", "admn"));
auth.strategy = new LoginGoogleStategy();
console.log(auth.login("admin", "admin"));
