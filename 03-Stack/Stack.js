// Pilha (Stack) genérica para simular botão "Desfazer"
class Stack {
  constructor() {
    this.items = [];
  }

  // Adiciona um novo estado / ação no topo
  push(item) {
    this.items.push(item);
  }

  // Remove e retorna o topo da pilha
  pop() {
    if (this.isEmpty()) {
      console.log("Pilha vazia, nada para desfazer.");
      return null;
    }
    return this.items.pop();
  }

  // Retorna o topo sem remover
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Retorna true se a pilha estiver vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // Quantidade de elementos na pilha
  size() {
    return this.items.length;
  }

  // Apenas para debug
  print() {
    console.log("Conteúdo atual da pilha (base -> topo):");
    if (this.isEmpty()) {
      console.log("(vazia)");
      return;
    }
    this.items.forEach((item, index) => {
      console.log(`${index}:`, item);
    });
  }
}

module.exports = Stack;
