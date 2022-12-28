// The class that its behaviour change depending by the state
class DocumentContext {

  // Three states text in blank, with content and whne the document is approved
  constructor() {
    this.content = '';
    this.state = new BlankState();
  }

  setState(state) {
    this.state = state;
  }


  write(text) {
    this.state.write(this, text);
  }

}

//This is the inicial behaviour
class BlankState {
  write(documentContext, text) {
    documentContext.content = text;
    documentContext.setState(new WithContentState());
  }
}


//This is the other state behaviour
class WithContentState {
  write(documentContext, text) {
    documentContext.content += ' ' + text;
  }
}

class ApprovedState {
  write(documentContext, text) {
    console.log('Documento aprobado ya no se modifica');
  }
}



const doc = new DocumentContext();

console.log(doc.state);
doc.write('zapato');
console.log(doc.content);
console.log(doc.state);

doc.write('pato');
doc.write('ganso');
console.log(doc.content);
console.log(doc.state);

doc.setState(new ApprovedState());
doc.write('pato');
doc.write('ganso');


doc.setState(new WithContentState());

doc.write('otra cosa chida');
console.log(doc.content);