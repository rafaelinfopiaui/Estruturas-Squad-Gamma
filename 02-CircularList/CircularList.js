const CircularNode = require("./CircularNode");

// Lista Circular para Vitrine de Promoções
class CircularList {
  constructor() {
    this.head = null;     // primeiro nó da lista
    this.current = null;  // ponteiro usado pelo next()
    this.size = 0;
  }

  // Adiciona uma nova promoção no final da lista
  // promo: { id, title, discount }
  add(promo) {
    const newNode = new CircularNode(promo);

    if (!this.head) {
      // Primeiro nó: aponta pra ele mesmo
      this.head = newNode;
      newNode.next = newNode;
    } else {
      // Percorre até o último (que aponta para o head)
      let tail = this.head;
      while (tail.next !== this.head) {
        tail = tail.next;
      }

      tail.next = newNode;
      newNode.next = this.head;
    }

    // Se ainda não temos um "current", apontar para o head
    if (!this.current) {
      this.current = this.head;
    }

    this.size++;
    console.log(
      `Promoção adicionada: ${promo.title} (id: ${promo.id}, desconto: ${promo.discount}%)`
    );
  }

  // Retorna a próxima promoção da vitrine (em ciclo infinito)
  next() {
    if (!this.current) {
      console.log("Nenhuma promoção cadastrada.");
      return null;
    }

    const promo = this.current.data;

    // Avança o ponteiro para o próximo nó (circular)
    this.current = this.current.next;

    return promo;
  }

  // Apenas para debug: imprime N promoções em sequência
  printCycle(times = this.size) {
    if (!this.head) {
      console.log("Lista de promoções vazia.");
      return;
    }

    let temp = this.head;
    let count = 0;
    let result = "Ciclo de promoções:\n";

    while (count < times) {
      const p = temp.data;
      result += `- ${p.title} (id: ${p.id}) — ${p.discount}% OFF\n`;
      temp = temp.next;
      count++;
    }

    console.log(result);
  }
}

module.exports = CircularList;
