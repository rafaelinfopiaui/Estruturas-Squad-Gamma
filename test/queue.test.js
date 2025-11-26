const assert = require("assert");
const Queue = require("../04-Queue/Queue");

let passed = 0;
let failed = 0;

function runTest(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
    passed++;
  } catch (err) {
    console.log(`✗ ${name}`);
    console.error("   ->", err.message);
    failed++;
  }
}

/* ================================
   TESTE 1 — enqueue + size
================================ */
runTest("enqueue() deve aumentar o tamanho da fila", () => {
  const queue = new Queue();
  queue.enqueue("A");
  queue.enqueue("B");

  assert.strictEqual(queue.size(), 2);
});

/* ================================
   TESTE 2 — dequeue (ordem FIFO)
================================ */
runTest("dequeue() deve remover na ordem FIFO", () => {
  const queue = new Queue();
  queue.enqueue("A");
  queue.enqueue("B");
  queue.enqueue("C");

  assert.strictEqual(queue.dequeue(), "A");
  assert.strictEqual(queue.dequeue(), "B");
  assert.strictEqual(queue.dequeue(), "C");
});

/* ================================
   TESTE 3 — dequeue em fila vazia
================================ */
runTest("dequeue() em fila vazia deve retornar null", () => {
  const queue = new Queue();
  assert.strictEqual(queue.dequeue(), null);
});

/* ================================
   TESTE 4 — front() deve mostrar o primeiro sem remover
================================ */
runTest("front() deve retornar o primeiro sem remover", () => {
  const queue = new Queue();
  queue.enqueue("A");
  queue.enqueue("B");

  assert.strictEqual(queue.front(), "A");
  assert.strictEqual(queue.size(), 2);
});

/* ================================
   RESUMO
================================ */
console.log("\n======================");
console.log(`Passaram: ${passed}`);
console.log(`Falharam: ${failed}`);
console.log("======================");

if (failed > 0) process.exitCode = 1;
