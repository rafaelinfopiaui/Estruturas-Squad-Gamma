const assert = require("assert");
const LinkedList = require("../LinkedList/LinkedList");

console.log(">>> INICIANDO ARQUIVO DE TESTES");

function createSampleCart() {
  const cart = new LinkedList();
  cart.add({ id: 1, name: "Mouse Gamer",      price: 99.9 });
  cart.add({ id: 2, name: "Teclado Mecânico", price: 250.0 });
  cart.add({ id: 3, name: "Headset USB",      price: 150.0 });
  return cart;
}

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
   TESTE 1
================================ */
runTest("Remove item do meio da lista (id=2)", () => {
  const cart = createSampleCart();
  cart.remove(2);

  const items = cart.toArray();
  const ids = items.map((p) => p.id);

  assert.deepStrictEqual(ids, [1, 3]);
});

/* ================================
   TESTE 2
================================ */
runTest("Tentar remover item inexistente (id=99) não altera a lista", () => {
  const cart = createSampleCart();
  cart.remove(99);

  const items = cart.toArray();
  const ids = items.map((p) => p.id);

  assert.deepStrictEqual(ids, [1, 2, 3]);
});

/* ================================
   TESTE 3
================================ */
runTest("Remover item do início da lista (id=1)", () => {
  const cart = createSampleCart();
  cart.remove(1);

  const items = cart.toArray();
  const ids = items.map((p) => p.id);

  assert.deepStrictEqual(ids, [2, 3]);
});

/* ================================
   TESTE 4
================================ */
runTest("Remover único elemento da lista", () => {
  const cart = new LinkedList();
  cart.add({ id: 10, name: "Produto Único", price: 50 });

  cart.remove(10);

  const items = cart.toArray();

  assert.strictEqual(items.length, 0);
  assert.strictEqual(cart.head, null);
});

/* ================================
   TESTE 5
================================ */
runTest("Remover em lista vazia não quebra", () => {
  const cart = new LinkedList();

  cart.remove(1);

  const items = cart.toArray();
  assert.strictEqual(items.length, 0);
});

/* ================================
   RESUMO
================================ */
console.log("\n======================");
console.log(`✅ Passaram: ${passed}`);
console.log(`❌ Falharam: ${failed}`);
console.log("======================");

if (failed > 0) process.exitCode = 1;
