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

#### 🔹 Boilerplate do Professor
- `boilerplate.js`  
  - Contém a estrutura base fornecida pela disciplina (`Node`, `LinkedList`, `Stack`, `Queue`).
  - A **LinkedList** foi adaptada para representar o **carrinho de compras**, trabalhando com objetos do tipo:
    ```js
    { id, name, price }
    ```
  - Na área de testes do arquivo, são realizadas operações de:
    - inserção de produtos,
    - remoção por `id`,
    - tentativa de remoção de item inexistente.

#### 🔹 Implementação modular (pasta `LinkedList/`)

- `LinkedList/Node.js`  
  Classe que representa o nó da lista:
  - `data` → objeto produto `{ id, name, price }`  
  - `next` → referência para o próximo nó

- `LinkedList/LinkedList.js`  
  Implementação da lista encadeada usada como **carrinho**:
  - `add(product)` → adiciona produto ao final  
  - `append(product)` → alias para `add`, mantendo compatibilidade com a documentação  
  - `remove(productId)` → remove produto pelo `id`, tratando:
    - remoção do início (head),
    - remoção do meio/fim,
    - item inexistente
  - `print()` → exibe o estado atual do carrinho em formato legível

- `LinkedList/cartSimulation.js`  
  Script de simulação do carrinho:
  - Cria uma instância de `LinkedList`
  - Adiciona produtos (mouse, teclado, headset)
  - Remove um produto existente
  - Tenta remover um produto inexistente


### 🎯 Resultado

A estrutura permite:

- Inserir itens dinamicamente no carrinho  
- Remover qualquer item por **ID**  
- Evitar quebra ao tentar remover itens inexistentes  
- Simular um fluxo real de carrinho em um e‑commerce

---

## 2️⃣ Vitrine de Promoções – Lista Circular

O banner rotativo de promoções deve ciclar infinitamente.

### 🔄 Status
- Estrutura planejada, pasta e arquivos serão criados em `CircularList/`:
  - `CircularNode.js`
  - `CircularList.js`
  - `promotionsSimulation.js`

### 🧠 Ideia de Implementação (planejado)
- Lista circular simples com 3 nós  
- Método:
  - `next()` → retorna o próximo banner em loop

### ✅ Teste desejado
Chamadas:

```text
next() → Promo1
next() → Promo2
next() → Promo3
next() → Promo1
```
---

## 3️⃣ Botão "Desfazer" – Pilha (Stack)

Simula o comportamento de “Ctrl+Z” em ações do usuário.

### 🔄 Status
- Estrutura planejada. Será implementada em:
  - `Stack/Stack.js`
  - `Stack/undoSimulation.js`

### 🧠 Implementação (planejado)
A classe `Stack` seguirá o padrão LIFO (Last In, First Out):

- `push(estado)` → adiciona novo estado ao topo  
- `pop()` → remove o estado mais recente  
- `undo()` → retorna ao estado anterior  
- `peek()` → visualiza o topo sem remover  
- `isEmpty()` → verifica se a pilha está vazia

---

## 4️⃣ Processamento de Pedidos – Fila (Queue)

Durante picos como Black Friday, pedidos entram em uma fila de processamento.

### 🔄 Status
- Estrutura planejada. Será implementada em:
  - `Queue/Queue.js`
  - `Queue/orderProcessingSimulation.js`

### 🧠 Implementação (planejado)
A classe `Queue` segue o padrão FIFO (First In, First Out):

- `enqueue(pedido)` → adiciona pedido ao final  
- `dequeue()` → remove o primeiro pedido  
- `front()` → consulta o primeiro sem remover  
- `size()` → retorna tamanho da fila  

### 📏 Regras esperadas
- Se `size() > 5` → mostrar `"Alta demanda"`  
- Processar **2 pedidos** (remover dois itens da fila)

---

## 5️⃣ Comparação de Estruturas – Array vs Lista Encadeada

O catálogo de produtos do e‑commerce é estático e muito consultado.

### 🔄 Status
- Será implementado em:
  - `ArrayComparison/comparison.js`

### **Entrega**
Arquivo explicando por que usar **Array (Vetor)** em vez de **LinkedList**.

### **Pontos-chave**
- Acesso direto por índice → `O(1)`  
- Lista Encadeada exige percurso sequencial → `O(n)`  
- Catálogo sofre poucas alterações → inserções não são prioridade  

---

# 📁 Estrutura do Repositório

## 📂 Estrutura atual

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

## 🧱 Estrutura planejada (próximos desafios)

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
├── boilerplate.js
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── PULL_REQUEST_TEMPLATE.md
└── README.md

```

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
| 2️⃣ Vitrine (CircularList) | Lista Circular | ⏳ Planejado |
| 3️⃣ Desfazer (Stack) | Pilha | ⏳ A iniciar |
| 4️⃣ Processamento (Queue) | Fila | ⏳ A iniciar |
| 5️⃣ Comparação Estruturas | Array vs Lista | ⏳ A iniciar |

# 🚀 Conclusão

Este repositório organiza o desenvolvimento da Squad Gamma para o setor de E‑commerce, simulando desafios reais de plataformas de varejo online.  
O **Desafio 1 (Carrinho)** já está concluído com:

- Implementação via **boilerplate do professor**
- Implementação modular na pasta `LinkedList/`

Os próximos desafios seguirão o mesmo padrão de estrutura, simulação e documentação.