// Fila (Queue) para simular processamento de pedidos
class Queue {
  constructor() {
    this.items = [];
  }

  // Adiciona no final da fila
  enqueue(item) {
    this.items.push(item);
  }

  // Remove o primeiro da fila
  dequeue() {
    if (this.isEmpty()) {
      console.log("Fila vazia, nada para processar.");
      return null;
    }
    return this.items.shift();
  }

  // Retorna o primeiro sem remover
  front() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  // Retorna true se a fila estiver vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // Tamanho da fila
  size() {
    return this.items.length;
  }

  // Debug visual
  print() {
    console.log("Fila atual:", this.items);
  }
}

module.exports = Queue;
