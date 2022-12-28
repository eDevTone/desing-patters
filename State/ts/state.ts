interface State {
  next(ticket: Ticket): number | null;
  add(ticket: Ticket, quantity: number): void;
}

class Ticket {
  private state: State;
  quantity: number;
  readonly limit: number;
  private number: number;

  public get getNumber(): number {
    return this.number++;
  }

  public set setState(state: State) {
    this.state = state;
  }

  public get getState(): State {
    return this.state;
  }

  constructor(limit: number) {
    this.limit = limit;
    this.quantity = 0;
    this.number = 0;
    this.state = new EmptyState();
  }

  next(): number | null {
    return this.state.next(this);
  }
  add(quantity: number) {
    this.state.add(this, quantity);
  }
}

class EmptyState implements State {
  next(ticket: Ticket): null {
    return null;
  }

  add(ticket: Ticket, quantity: number): void {
    if (quantity < ticket.limit) {
      ticket.quantity = quantity;
      ticket.setState = new WithDataState();
    } else if (quantity === ticket.limit) {
      ticket.quantity = quantity;
      ticket.setState = new FullState();
    }
  }
}

class WithDataState implements State {
  next(ticket: Ticket): number {
    ticket.quantity--;
    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState();
    }
    return ticket.getNumber;
  }

  add(ticket: Ticket, quantity: number): void {
    if (ticket.quantity + quantity < ticket.limit) {
      ticket.quantity += quantity;
    } else if (ticket.quantity + quantity === ticket.limit) {
      ticket.quantity += quantity;
      ticket.setState = new FullState();
    }
  }
}

class FullState implements State {
  next(ticket: Ticket): number {
    ticket.quantity--;
    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState();
    } else {
      ticket.setState = new WithDataState();
    }
    return ticket.getNumber;
  }

  add(ticket: Ticket, quantity: number): void {
    console.log("Ticket is full");
  }
}

//Example
const ticket = new Ticket(5);
console.log(ticket.next()); // null
ticket.add(5);
console.log(ticket.getState); // FullState
ticket.add(5);
console.log(ticket.next()); // 0
console.log(ticket.next()); // 1
console.log(ticket.next()); // 2
console.log(ticket.next()); // 3
console.log(ticket.getState); // WithDataState
console.log(ticket.next()); // 4
console.log(ticket.next()); // null
console.log(ticket.getState); // EmptyState
