// Nó para Lista Circular de Promoções
class CircularNode {
  constructor(data) {
    this.data = data;   // { id, title, discount }
    this.next = null;
  }
}

module.exports = CircularNode;
