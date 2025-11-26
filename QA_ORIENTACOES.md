# 🧪 Orientações de Testes – QA Engineer / Tester  
**Responsável:** AILTON MEDEIROS RODRIGUES

O objetivo do QA é garantir que **todas as estruturas de dados** se comportem corretamente, inclusive em cenários de erro e edge cases, antes de qualquer merge na `main`.

---

## ✅ 1. Como executar os testes

Na raiz do projeto, execute:

```bash
node test/main.test.js
```

O script executa a bateria de testes para a **LinkedList (Carrinho de Compras)** e exibe um resumo:

======================
✓ Passaram: X
✗ Falharam: Y


Se houver qualquer falha (`Y > 0`), o Pull Request **não deve ser aprovado** até correção.

---

## ✅ 2. O que já está sendo testado (Desafio 1 – LinkedList)

Arquivo: `test/main.test.js`  
Estrutura: `LinkedList/LinkedList.js`

### Casos de teste existentes:

### **1️⃣ Remoção de item do meio da lista**
- Lista inicial: `[1, 2, 3]`
- Ação: remover `id=2`
- Esperado: `[1, 3]`

---

### **2️⃣ Remoção de item inexistente**
- Lista inicial: `[1, 2, 3]`
- Ação: remover `id=99`
- Esperado: `[1, 2, 3]`

---

### **3️⃣ Remoção do primeiro elemento**
- Lista inicial: `[1, 2, 3]`
- Ação: remover `id=1`
- Esperado: `[2, 3]`

---

### **4️⃣ Remoção em lista com único elemento**
- Lista inicial: `[10]`
- Ação: remover `id=10`
- Esperado: lista vazia, `head = null`

---

### **5️⃣ Remoção em lista vazia**
- Lista inicial: `[]`
- Ação: remover `id=1`
- Esperado: não quebrar, continuar vazia

---

## ✅ 3. O que o QA deve validar em cada PR

Para *qualquer* Pull Request que altere lógica de estruturas, o QA deve:

### ✔ 1. Rodar todos os testes automatizados  
```bash
node test/main.test.js
```

### ✔ 2. Testar simulações manuais
Executar os scripts de exemplo:

```bash
node LinkedList/cartSimulation.js
node Stack/undoSimulation.js
node Queue/orderProcessingSimulation.js
node CircularList/promotionsSimulation.js
```

Confirmar:

- Saída no console
- Ordem correta de execução (LIFO / FIFO / Circular)
- Nenhuma quebra inesperada

### ✔ 3. Verificar se o PR traz testes novos
Alterações de lógica devem vir acompanhadas de novos testes.

### ✔ 4. Garantir validação de edge cases
Como por exemplo:
- Estruturas vazias
- IDs inexistentes
- Várias operações seguidas (push/pop, enqueue/dequeue)
- Limites (ex.: fila > 5 → “Alta demanda”)

### ✔ 5. Validar documentação
README e comentários devem refletir o comportamento real.

## ✅ 4. Próximos passos esperados do QA
O QA deverá acompanhar a criação de testes para:

### Stack (Pilha)
- `push`, `pop`, `peek`, `isEmpty`
- Garantir que pop() em pilha vazia não quebre

### Queue (Fila)
- `enqueue`, `dequeue`, `front`, `size`
- Regra: “Alta demanda” quando size() > 5
- Processamento de múltiplos pedidos

### CircularList
- Ciclagem infinita via next()
- Validação do loop: Promo1 → Promo2 → Promo3 → Promo1...

### ArrayComparison
- Validação teórica: complexidade e justificativa de uso

## 🎯 5. Critério de aprovação do QA
Um PR só pode ser aprovado se:

- Todos os testes passaram
- Nenhum comportamento foi quebrado
- Edge cases foram validados
- Documentação atualizada
- Simulações funcionando no terminal
- Cobertura mínima de testes incluída

## 🏁 Conclusão
O QA é responsável por garantir que o código da Squad Gamma seja:
- Confiável
- Escalável
- Testado
- Documentado
- Livre de regressões

Todo merge deve passar pela validação do QA antes de entrar na main.