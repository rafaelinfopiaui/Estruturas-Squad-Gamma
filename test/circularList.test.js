const assert = require("assert");
const CircularList = require("../CircularList/CircularList");

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
   FUNÇÃO AUXILIAR: cria lista com 3 promos
================================ */
function createSamplePromotions() {
  const promotions = new CircularList();

  promotions.add({ id: 1, title: "Promoção Mouse Gamer",      discount: 15 });
  promotions.add({ id: 2, title: "Promoção Teclado Mecânico", discount: 20 });
  promotions.add({ id: 3, title: "Promoção Headset USB",      discount: 10 });

  return promotions;
}

/* ================================
   TESTE 1
   Ciclo básico: 3 promos girando
================================ */
runTest("next() deve ciclar entre 3 promoções (1,2,3,1,2,3)", () => {
  const promotions = createSamplePromotions();

  const ids = [];
  for (let i = 0; i < 6; i++) {
    const promo = promotions.next();
    ids.push(promo.id);
  }

  assert.deepStrictEqual(ids, [1, 2, 3, 1, 2, 3]);
});

/* ================================
   TESTE 2
   Lista com apenas 1 promoção
================================ */
runTest("next() em lista com 1 promoção sempre retorna a mesma", () => {
  const promotions = new CircularList();

  promotions.add({ id: 10, title: "Promoção Única", discount: 50 });

  const ids = [];
  for (let i = 0; i < 4; i++) {
    const promo = promotions.next();
    ids.push(promo.id);
  }

  assert.deepStrictEqual(ids, [10, 10, 10, 10]);
});

/* ================================
   TESTE 3
   Lista vazia
================================ */
runTest("next() em lista vazia deve retornar null e não quebrar", () => {
  const promotions = new CircularList();

  const result = promotions.next();

  assert.strictEqual(result, null);
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
