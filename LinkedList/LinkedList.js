const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(id, name, price) {
    const newNode = new Node(id, name, price);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  remove(id) {
    if (!this.head) {
      console.log("Carrinho vazio.");
      return;
    }

    if (this.head.id === id) {
      this.head = this.head.next;
      console.log(`Item ${id} removido do início.`);
      return;
    }

    let current = this.head;
    let previous = null;

    while (current && current.id !== id) {
      previous = current;
      current = current.next;
    }

    if (!current) {
      console.log(`Item ${id} não encontrado.`);
      return;
    }

    previous.next = current.next;
    console.log(`Item ${id} removido com sucesso.`);
  }

  print() {
    let current = this.head;
    console.log("Carrinho atual:");

    while (current) {
      console.log(`- ${current.name} (R$ ${current.price})`);
      current = current.next;
    }
  }
}

module.exports = LinkedList;
