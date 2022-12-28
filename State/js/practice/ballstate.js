class Ball {
  constructor(ctx, canvas, size) {
    this.ctx = ctx;
    this.width = canvas.width;
    this.height = canvas.height;
    this.size = size;
    this.positionX = 0;
    this.positionY = 0;

    this.state = new StateRight();
  }

  setState(state) {
    this.state = state;
  }

  print() {
    this.state.print(this);
  }

  cleanAndFill() {
    ctx.clearRect(0, 0, ball.width, ball.height);
    ctx.fillRect(ball.positionX, ball.positionY, ball.size, ball.size);
  }
}

class StateRight {
  print(ball) {
    ball.cleanAndFill();

    if (ball.positionX < (ball.width - ball.size))
      ball.positionX += ball.size;
    else
      ball.setState(new StateBottom())
  }

}

class StateBottom {
  print(ball) {
    ball.cleanAndFill();

    if (ball.positionY < (ball.height - ball.size))
      ball.positionY += ball.size;
    else
      ball.setState(new StateLeft());
  }

}

class StateLeft {
  print(ball) {
    ball.cleanAndFill();

    if (ball.positionX > 0)
      ball.positionX -= ball.size;
    else
      ball.setState(new StateTop());
  }

}

class StateTop {
  print(ball) {
    ball.cleanAndFill();

    if (ball.positionY > 0)
      ball.positionY -= ball.size;
    else
      ball.setState(new StateRight());
  }
}


const ctx = canvas.getContext('2d');
ctx.fillStyle = 'orange';

const ball = new Ball(ctx, canvas, 100);
ball.print();

setInterval(() => {
  ball.print()
}, 100);




console.log(ctx);