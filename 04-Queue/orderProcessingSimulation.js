const Queue = require("./Queue");

console.log("--- SIMULAÇÃO PROCESSAMENTO DE PEDIDOS (QUEUE) ---");

const orderQueue = new Queue();

// Função de novo pedido no sistema
function addOrder(id, customer) {
  const order = { id, customer };
  orderQueue.enqueue(order);
  console.log(`📦 Pedido recebido: ID ${id}, Cliente: ${customer}`);
}

// Processar o próximo pedido da fila
function processOrder() {
  console.log("\n--- Processando pedido ---");

  if (orderQueue.isEmpty()) {
    console.log("Nenhum pedido pendente.");
    return;
  }

  const order = orderQueue.dequeue();
  console.log(`✔ Pedido ID ${order.id} finalizado para ${order.customer}`);
}

// --- Simulação ---
addOrder(101, "Maria");
addOrder(102, "João");
addOrder(103, "Ana");

processOrder(); // Maria
processOrder(); // João
processOrder(); // Ana
processOrder(); // fila vazia
