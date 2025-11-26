const Node = require("./Node");

console.log(">>> CARREGANDO LinkedList DE:", __filename);

// Lista ligada usada como Carrinho de Compras
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Adiciona um produto no final da lista
  // product: { id, name, price }
  add(product) {
    const newNode = new Node(product);

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
    console.log(
      `Adicionado ao carrinho: ${product.name} (id: ${product.id})`
    );
  }

  // Alias pra ficar alinhado com o README (append == add)
  append(product) {
    this.add(product);
  }

  // Remove um produto pelo ID
  remove(productId) {
    if (!this.head) {
      console.log("Carrinho vazio, nada para remover.");
      return;
    }

    // Caso especial: o head é o produto a remover
    if (this.head.data.id === productId) {
      console.log(
        `Removendo do início: ${this.head.data.name} (id: ${this.head.data.id})`
      );
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current && current.data.id !== productId) {
      previous = current;
      current = current.next;
    }

    if (!current) {
      console.log(`Produto com id ${productId} não encontrado no carrinho.`);
      return;
    }

    console.log(
      `Removendo: ${current.data.name} (id: ${current.data.id})`
    );
    previous.next = current.next;
    this.size--;
  }

  // Retorna um array com os dados dos nós (para facilitar testes)
  toArray() {
    const items = [];
    let current = this.head;

    while (current) {
      items.push(current.data); // { id, name, price }
      current = current.next;
    }

    return items;
  }

  // Exibe o estado atual do carrinho
  print() {
    let current = this.head;
    let result = "Carrinho atual:\n";

    if (!current) {
      console.log("Carrinho vazio.");
      return;
    }

    while (current) {
      const p = current.data;
      result += `- ${p.name} (id: ${p.id}) — R$ ${p.price}\n`;
      current = current.next;
    }

    console.log(result);
  }
}

module.exports = LinkedList;
