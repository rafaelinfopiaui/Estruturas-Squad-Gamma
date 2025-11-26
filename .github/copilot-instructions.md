# Instruções para agentes de código (Copilot / AI)

Este arquivo reúne o conhecimento prático necessário para que um agente de desenvolvimento seja imediatamente produtivo neste repositório.

**Contexto geral**
- Projeto: implementações de estruturas de dados em JavaScript (Node.js). O foco atual é um carrinho (LinkedList). Veja `README.md` para panorama.
- Padrão de módulo: CommonJS (`require` / `module.exports`). Não converta para ESM sem pedir ao mantenedor.

**Arquitetura e pontos importantes**
- `LinkedList/LinkedList.js`: implementação do carrinho. Métodos públicos usados por testes: `add(product)`, `append(product)` (alias), `remove(productId)`, `toArray()`, `print()`.
- `LinkedList/Node.js`: nó simples com `{ data, next }`.
- `LinkedList/cartSimulation.js` e `boilerplate.js`: exemplos de uso e área de testes demonstrativos.
- `test/main.test.js`: runner de testes custom (não usa Jest/Mocha). Os testes invocam `toArray()` e verificam ids — não altere a assinatura de `toArray()` nem o comportamento de `remove(id)`.

**Comportamento esperado (regras descobertas)**
- `remove(id)` deve:
  - lidar com lista vazia sem lançar erro,
  - remover o `head` quando aplicável,
  - remover do meio/fim corretamente,
  - imprimir mensagens via `console.log` (úteis para simulações), mas os testes dependem apenas de `toArray()`.
- `add(product)` aceita objeto `{ id, name, price }` e incrementa `size`.

**Comandos úteis**
- Instalar dependências (se houver `package.json`):
  - `npm install`
- Rodar testes unitários script atual:
  - `node test/main.test.js`
- Executar simulações:
  - Carrinho: `node LinkedList/cartSimulation.js`
  - Boilerplate de demonstração: `node boilerplate.js`

**Convenções de código e PRs**
- Não altere assinaturas públicas dos métodos (`add`, `remove`, `toArray`, etc.). Os testes e simulações esperam essas assinaturas.
- Logs usam `console.log` para saída didática — é aceitável ao implementar simulações.
- Branches por funcionalidade: `feature/<nome>`; commits seguem prefixos descritos no `README.md` (`feat:`, `fix:`, `test:`, `docs:`).

**Exemplos rápidos (trechos do repositório)**
- Criar um carrinho e obter IDs atuais:
```js
const LinkedList = require("./LinkedList");
const cart = new LinkedList();
cart.add({ id: 1, name: 'Mouse', price: 99 });
const ids = cart.toArray().map(p => p.id); // [1]
```
- Remover item inexistente não deve lançar erro:
```js
cart.remove(99); // deve apenas logar "não encontrado" e manter lista
```

**O que evitar / notas de segurança**
- Não converta o projeto para TypeScript ou ESM sem coordenar com o Tech Lead (`RAFAEL SAMPAIO OLIVEIRA`).
- Evite mudanças que alterem retornos de `toArray()` ou a forma como `remove()` trata elementos não existentes — isso quebrará os testes.

Se algo estiver incerto (por exemplo: documentar nova API pública, adicionar uma dependência), descreva a mudança proposta em um PR e solicite revisão do Tech Lead.

---
Por favor, revise este rascunho e me diga se queres mais exemplos (ex.: padrões para `Stack`/`Queue` quando forem implementados) ou conversão para uma versão em inglês.
