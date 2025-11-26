const assert = require("assert");
const Stack = require("../03-Stack/Stack");

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
   push + size
================================ */
runTest("push() deve aumentar o tamanho da pilha", () => {
  const stack = new Stack();

  assert.strictEqual(stack.size(), 0);

  stack.push("A");
  stack.push("B");

  assert.strictEqual(stack.size(), 2);
});

/* ================================
   TESTE 2
   pop em ordem LIFO
================================ */
runTest("pop() deve remover na ordem LIFO", () => {
  const stack = new Stack();

  stack.push("A");
  stack.push("B");
  stack.push("C");

  const c = stack.pop();
  const b = stack.pop();
  const a = stack.pop();

  assert.strictEqual(c, "C");
  assert.strictEqual(b, "B");
  assert.strictEqual(a, "A");
  assert.strictEqual(stack.isEmpty(), true);
});

/* ================================
   TESTE 3
   pop em pilha vazia
================================ */
runTest("pop() em pilha vazia deve retornar null", () => {
  const stack = new Stack();

  const value = stack.pop();

  assert.strictEqual(value, null);
  assert.strictEqual(stack.size(), 0);
});

/* ================================
   TESTE 4
   peek não remove elemento
================================ */
runTest("peek() deve mostrar o topo sem remover", () => {
  const stack = new Stack();

  stack.push("A");
  stack.push("B");

  const top1 = stack.peek();
  const size1 = stack.size();

  const top2 = stack.peek();
  const size2 = stack.size();

  assert.strictEqual(top1, "B");
  assert.strictEqual(top2, "B");
  assert.strictEqual(size1, 2);
  assert.strictEqual(size2, 2);
});

/* ================================
   RESUMO
================================ */
console.log("\n======================");
console.log(`✅ Passaram: ${passed}`);
console.log(`❌ Falharam: ${failed}`);
console.log("======================");

if (failed > 0) {
  process.exitCode = 1;
}
