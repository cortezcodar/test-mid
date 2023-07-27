class Pilha {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "A pilha está vazia, não é possível realizar o pop.";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const minhaPilha = new Pilha();
console.log(minhaPilha.isEmpty()); 

minhaPilha.push(10);
minhaPilha.push(20);
minhaPilha.push(30);
console.log(minhaPilha.isEmpty()); 

console.log(minhaPilha.pop()); 
console.log(minhaPilha.pop()); 
console.log(minhaPilha.pop()); 
console.log(minhaPilha.isEmpty()); 
