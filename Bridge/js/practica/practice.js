
// This is the abstraction of the bridge pattern
class Editor {
  constructor(implementation) {
    this.implementation = implementation;
  }

  print(width, height, color) {
    this.implementation.setWidth(width);
    this.implementation.setHeight(height);
    this.implementation.setColor(color);
    this.implementation.print();
  }
}

// This is the abstraction of the bridge pattern
class EditorWithClear extends Editor {
  constructor(implementation) {
    super(implementation);
  }

  clear() {
    this.implementation.setWidth(0);
    this.implementation.setHeight(0);
    this.implementation.print();
  }
}


// This is the implementation of the bridge pattern
class HTMLPainter {
  constructor(container) {
    this.container = container;
    this.width = '1px';
    this.height = '1px';
    this.color = '#000000';
  }

  setWidth(width) {
    this.width = `${width}px`;
  }

  setHeight(height) {
    this.height = `${height}px`;
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.container.innerHTML = `<div
    style="width: ${this.width}; height: ${this.height}; background-color: ${this.color};"
    >
    </div>`;
  }
}

// This is other implementation of the bridge pattern
class CanvasPainter {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.width = 1;
    this.height = 1;
    this.color = '#000000';
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
}


// const editor = new Editor(new HTMLPainter(content));
const editor = new EditorWithClear(new CanvasPainter(canvas));
// editor.print(100, 100, 'tomato');

range.addEventListener('input', (event) => {
  editor.print(event.target.value, event.target.value, 'tomato');
});


editorColor.addEventListener('input', (event) => {
  editor.print(range.value, range.value, event.target.value);
})

btn.addEventListener('click', () => {
  editor.clear();
});