/**
 * Script: runAllTests.js
 * Executa TODOS os testes e simulações das Tasks 1 a 5.
 * 
 * Inclui:
 *  - Testes da LinkedList (Task 1)
 *  - Testes da CircularList (Task 2)
 *  - Testes da Stack (Task 3)
 *  - Testes da Queue (Task 4)
 *  - Execução da comparação de estruturas (Task 5)
 */

const { execSync } = require("child_process");

function run(title, command) {
  console.log(`\n=== ${title} ===`);
  try {
    const output = execSync(command, { stdio: "inherit" });
    return output;
  } catch (err) {
    console.log(`❌ Erro ao executar: ${title}`);
  }
}

console.log("\n=======================================");
console.log("   🚀 Rodando TODOS os testes (Tasks 1–5)");
console.log("=======================================\n");

// Task 1 — LinkedList
run("Task 1 – LinkedList Tests", "node test/main.test.js");

// Task 2 — CircularList
run("Task 2 – CircularList Tests", "node test/circularList.test.js");

// Task 3 — Stack
run("Task 3 – Stack Tests", "node test/stack.test.js");

// Task 4 — Queue
run("Task 4 – Queue Tests", "node test/queue.test.js");

// Task 5 — Comparison Script
run("Task 5 – Estruturas (Array vs LinkedList)", "node 05-Comparison/structureComparison.js");

console.log("\n=======================================");
console.log("   ✔ Finalizado — Todas as tasks executadas");
console.log("=======================================\n");
