const LinkedList = require("./LinkedList");

console.log("--- TESTANDO CARRINHO (LinkedList) ---");

const cart = new LinkedList();

// Adicionando produtos
cart.add({ id: 1, name: "Mouse Gamer",      price: 99.9 });
cart.add({ id: 2, name: "Teclado Mecânico", price: 250.0 });
cart.add({ id: 3, name: "Headset USB",      price: 150.0 });

cart.print();

console.log("\n--- Removendo produto id=2 (Teclado Mecânico) ---");
cart.remove(2);
cart.print();

console.log("\n--- Tentando remover produto inexistente (id=99) ---");
cart.remove(99);
cart.print();
