# 🛒 Squad Gamma – E-commerce (Varejo Online)

Este repositório contém as implementações das estruturas de dados solicitadas para o **Desafio de Squads – 25/11/2025**, conforme o memorando oficial da Diretoria Técnica.  
A Squad Gamma é responsável por desenvolver soluções típicas de uma plataforma de e-commerce, implementando **listas, pilhas, filas e arrays** usando **JavaScript (Node.js)**.

---

## 👥 Composição da Squad e Papéis

### 🧭 Tech Lead  
**RAFAEL SAMPAIO OLIVEIRA**  
Responsável pela arquitetura geral, organização do repositório, revisão e aprovação dos Pull Requests, garantia de boas práticas e padronização do código.

### 🧪 QA Engineer / Tester  
**AILTON MEDEIROS RODRIGUES**  
Responsável pela criação dos casos de teste, validações, tentativas de quebra ("break tests"), verificação dos requisitos e garantia da estabilidade do sistema.

### 🛠️ Software Engineers (Developers)  
- **ANTÔNIO WILKER SANTOS DA SILVA FILHO**  
- **ISAAC BRUNO BATISTA ARAGÃO**  
- **LAIS LIBÓRIO NEIVA EULÁLIO**  

Responsáveis pela implementação prática das classes, métodos, estruturas de dados e simulações das situações-problema.

---

# 📦 Estruturas Desenvolvidas e Situações-Problema

A Squad Gamma deve resolver 5 desafios específicos do setor **E-commerce (Varejo Online)**, conforme descrito no documento oficial.

---

## 1️⃣ Carrinho de Compras – Lista Encadeada (LinkedList)

O usuário pode adicionar itens ao carrinho e remover itens de qualquer posição, caso estejam indisponíveis.

### 📂 Arquivos Implementados
- `Node.js` — nó contendo `id`, `name`, `price` e ponteiro `next`
- `LinkedList.js` — implementação completa da estrutura de dados
  - `append(id, name, price)` → adiciona item ao carrinho
  - `remove(id)` → remove itens do início, meio ou fim
  - `print()` → exibe todos os itens do carrinho
- `cartSimulation.js` — simulação prática do carrinho em uso

### 🎯 Resultado
A estrutura permite:
- Inserir itens dinamicamente
- Remover qualquer item por ID
- Evitar quebra ao tentar remover itens inexistentes
- Simular comportamento real de um carrinho de e‑commerce


---

## 2️⃣ Vitrine de Promoções – Lista Circular

O banner rotativo de promoções deve ciclar infinitamente.

### **Implementação**
- Lista circular simples com 3 nós
- Método:
  - `next()` retorna o próximo banner

### **Teste obrigatório**
Chamadas:

next() → Promo1
next() → Promo2
next() → Promo3
next() → Promo1


---

## 3️⃣ Botão "Desfazer" – Pilha (Stack)

Simula o comportamento de “Ctrl+Z” em ações do usuário.

### **Implementação**
- Classe `Stack`:
  - `push(estado)`
  - `pop()`
  - `undo()` → remove o último estado e retorna ao anterior

---

## 4️⃣ Processamento de Pedidos – Fila (Queue)

Durante picos como Black Friday, pedidos entram em uma fila de processamento.

### **Implementação**
- Classe `Queue`:
  - `enqueue(pedido)`
  - `dequeue()`
  - `size()`

### **Regras**
- Se `size() > 5` → exibir `"Alta demanda"`
- Processar (remover) **2 pedidos**

---

## 5️⃣ Comparação de Estruturas – Array vs Lista Encadeada

O catálogo de produtos do e-commerce é estático e muito consultado.

### **Entrega**
Arquivo explicando por que usar **Array (Vetor)** ao invés de **LinkedList**.

### **Pontos-chave**
- Acesso direto por índice → `O(1)`
- Lista Encadeada tem acesso sequencial → `O(n)`
- Catálogo raramente muda → inserções não são o foco

---

# 📁 Estrutura Sugerida do Repositório

```
Estruturas-Squad-Gamma/
│
├── LinkedList/
│ ├── Node.js
│ ├── LinkedList.js
│ └── cartSimulation.js
│
├── CircularList/
│ ├── CircularNode.js
│ ├── CircularList.js
│ └── promotionsSimulation.js
│
├── Stack/
│ ├── Stack.js
│ └── undoSimulation.js
│
├── Queue/
│ ├── Queue.js
│ └── orderProcessingSimulation.js
│
├── ArrayComparison/
│ └── comparison.js
│
├── test/
│ └── main.test.js
│
└── README.md

```
---

# 🔧 Como Executar o Projeto

### **1. Instalar dependências**
```bash
npm install
```
## ▶️ Executar Testes

```bash
node test/main.test.js
```

## 🧪 Executar Simulações
🛒 Carrinho (LinkedList)

```bash
node LinkedList/cartSimulation.js
```

## 🔁 Vitrine (CircularList)

```bash
node CircularList/promotionsSimulation.js
```

## ↩️ Desfazer (Stack)

```bash
node Stack/undoSimulation.js
```

## 📦 Fila de Pedidos (Queue)

```bash
node Queue/orderProcessingSimulation.js
```

## 📊 Comparação Array vs Lista

```bash
node ArrayComparison/comparison.js
```

### 🌐 Fluxo de Trabalho (Git)

## 🔀 Branches por Funcionalidade
- `feature/linkedlist`
- `feature/circularlist`
- `feature/stack`
- `feature/queue`
- `feature/arraycomparison`

## 📝 Padrão de Commits
- `feat:` — nova funcionalidade  
- `fix:` — correção  
- `test:` — criação ou melhoria de testes  
- `docs:` — alterações no README  

## 🔍 Revisão (Code Review)
- Todo PR é revisado pelo **Tech Lead**
- **QA** valida simulações e casos de teste antes do merge

## 🧪 Validação e Testes (QA)

O arquivo `test/main.test.js` deve conter testes para:

- Remoção de item inexistente
- Remoção de item em lista vazia
- Comportamento da pilha vazia ao desfazer
- Fila com mais de 5 pedidos
- Comportamento circular da vitrine

O QA é responsável por garantir que:

- Todos os requisitos foram atendidos
- O sistema não quebra com entradas inválidas
- Edge cases foram contemplados

# 📊 Estado Atual dos Desafios

| Desafio | Estrutura | Status |
|--------|-----------|--------|
| 1️⃣ Carrinho (LinkedList) | Lista Encadeada | ✅ Concluído |
| 2️⃣ Vitrine (CircularList) | Lista Circular | ⏳ Em andamento |
| 3️⃣ Desfazer (Stack) | Pilha | ⏳ A iniciar |
| 4️⃣ Processamento (Queue) | Fila | ⏳ A iniciar |
| 5️⃣ Comparação Estruturas | Array vs Lista | ⏳ A iniciar |

🚀 Conclusão

Este repositório entrega todas as estruturas de dados solicitadas para o setor de E-commerce, simulando desafios reais de plataformas de varejo online.
A Squad Gamma aplicou conceitos fundamentais de Linked Lists, Circular Lists, Stacks, Queues e Arrays para criar soluções funcionais, bem documentadas e testadas.
