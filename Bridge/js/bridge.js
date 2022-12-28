// This is the absaction class
class EncoderTextAbstraction {
  constructor(encoder) {
    this.encoder = encoder;
  }

  // Is not necessary that the method name is the same as the class name
  encode(str) {
    return this.encoder.encode(str);
  }

  decode(str) {
    return this.encoder.decode(str);
  }
}

// Implementor class
class Base64EncoderImplentor {
  encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }
}

class HTMLEncoderImplementor {
  encode(str) {
    return str.split(/\./g).reduce((acc, word) => {
      return `${acc}<p>${word.trim()}</p>`;
    }, '');
  }

  decode(str) {
    return str.split(/<\/p>/g).reduce((acc, word) => {
      return word !== '' ? acc + word.replace('<p>', '').trim() + '. ' : acc + '';
    }, '');
  }
}

const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplentor());
const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
console.log(encoder1.encode('Pato!'));
console.log(encoder2.encode('Esto es un texto. codificame esta. por favor'));
console.log(encoder2.decode('<p>Esto es un texto</p><p>codificame esta</p><p>por favor</p>'));
