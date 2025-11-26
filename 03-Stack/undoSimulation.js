const Stack = require("./Stack");

console.log("--- SIMULAÇÃO BOTÃO DESFAZER (STACK) ---");

// Estado atual do "texto"
let currentText = "";

// Pilha de estados anteriores
const history = new Stack();

// Função que aplica uma nova mudança
function applyChange(newText) {
  console.log("\n--- Aplicando mudança ---");
  console.log("Texto atual:", JSON.stringify(currentText));

  // Guarda o estado anterior na pilha
  history.push(currentText);

  // Atualiza para o novo estado
  currentText = newText;

  console.log("Novo texto:", JSON.stringify(currentText));
  console.log("Tamanho da pilha de histórico:", history.size());
}

// Função que desfaz a última mudança
function undo() {
  console.log("\n--- Desfazer (Ctrl+Z) ---");

  if (history.isEmpty()) {
    console.log("Nada para desfazer.");
    return;
  }

  const previousState = history.pop();
  console.log("Voltando para o estado:", JSON.stringify(previousState));
  currentText = previousState;
  console.log("Texto atual após undo:", JSON.stringify(currentText));
}

// Simulação de uso
applyChange("Olá, mundo!");
applyChange("Olá, mundo! Este é um teste.");
applyChange("Olá, mundo! Este é um teste com Stack.");

// Desfazendo algumas ações
undo(); // volta para "Olá, mundo! Este é um teste."
undo(); // volta para "Olá, mundo!"
undo(); // volta para ""
undo(); // pilha vazia, nada pra desfazer
