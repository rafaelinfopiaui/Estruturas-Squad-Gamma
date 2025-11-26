const LinkedList = require("./LinkedList");

const cart = new LinkedList();

console.log("\n🛒 Adicionando itens ao carrinho...");
cart.append(1, "Mouse Gamer", 99.90);
cart.append(2, "Teclado Mecânico", 250.00);
cart.append(3, "Headset USB", 150.00);

cart.print();

console.log("\n❌ Removendo item 2 (Teclado Mecânico)...");
cart.remove(2);
cart.print();

console.log("\n❌ Tentando remover item que não existe...");
cart.remove(99);
