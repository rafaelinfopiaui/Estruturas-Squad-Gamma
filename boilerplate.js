/**
 * BOILERPLATE - ESTRUTURAS DE DADOS
 * Squad: SQUAD GAMMA
 * Instruções: Preencham a lógica dentro dos métodos marcados com TODO
 */

// ==================================================================
// 1. CLASSE NODE (O "Nó" que guarda o dado e o ponteiro)
// ==================================================================
class Node {
  constructor(data) {
    this.data = data; // Ex: produto {id, name, price}
    this.next = null;
  }
}

// ==================================================================
// 2. LISTA LIGADA (LinkedList)
// ==================================================================
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Adiciona elemento ao final
  add(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
    console.log(`Adicionado:`, data);
  }

  // Remove um elemento pelo ID / valor
  remove(id) {
    if (!this.head) {
      console.log("Lista vazia.");
      return;
    }

    // Caso especial: remover o head
    if (this.head.data.id === id) {
      console.log(`Removido do início:`, this.head.data);
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current && current.data.id !== id) {
      previous = current;
      current = current.next;
    }

    if (!current) {
      console.log(`Elemento com id ${id} não encontrado.`);
      return;
    }

    console.log(`Removido:`, current.data);
    previous.next = current.next;
    this.size--;
  }

  // Mostrar todos os elementos
  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += JSON.stringify(current.data) + " -> ";
      current = current.next;
    }

    console.log(result + "null");
  }
}

// ==================================================================
// 3. PILHA (Stack)
// ==================================================================
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
    console.log("Push:", element);
  }

  pop() {
    if (this.items.length === 0) {
      console.log("Pilha vazia!");
      return null;
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1] || null;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// ==================================================================
// 4. FILA (Queue)
// ==================================================================
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
    console.log("Enqueue:", element);
  }

  dequeue() {
    if (this.items.length === 0) {
      console.log("Fila vazia!");
      return null;
    }
    return this.items.shift();
  }

  front() {
    return this.items[0] || null;
  }
}

// ==================================================================
// ÁREA DE TESTES
// ==================================================================

console.log("\n--- TESTANDO LISTA ---");
const lista = new LinkedList();
lista.add({ id: 1, name: "Mouse", price: 99 });
lista.add({ id: 2, name: "Teclado", price: 250 });
lista.print();
lista.remove(2);
lista.print();

console.log("\n--- TESTANDO PILHA ---");
const pilha = new Stack();
pilha.push("Ação 1");
pilha.push("Ação 2");
console.log("Topo:", pilha.peek());
pilha.pop();
console.log("Topo:", pilha.peek());

console.log("\n--- TESTANDO FILA ---");
const fila = new Queue();
fila.enqueue("Cliente 1");
fila.enqueue("Cliente 2");
console.log("Primeiro:", fila.front());
fila.dequeue();
console.log("Primeiro:", fila.front());
