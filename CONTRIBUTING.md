# 🤝 Guia de Contribuição — Squad Gamma (E-commerce)

Bem-vindo ao repositório da **Squad Gamma**!  
Este documento define como cada integrante deve colaborar no projeto, garantindo organização, padronização e qualidade no desenvolvimento.

Se você está lendo isso, significa que faz parte da entrega do desafio — bora colaborar do jeito certo! 🚀

---

# ⭐ 1. Princípios da Squad

- Ninguém faz push direto na `main`
- Todo desenvolvimento acontece em **branches de feature**
- Todo código entra via **Pull Request**
- Revisão obrigatória do **Tech Lead**
- Validação obrigatória do **QA**, quando aplicável
- Padrões de commit e estrutura sempre mantidos

---

# 🌿 2. Fluxo de Trabalho (Workflow Oficial)

## 2.1 Antes de começar qualquer tarefa
Sempre atualize sua branch principal local:

```bash
git checkout main
git pull origin main
```

---

## 2.2 Criando uma nova branch de desenvolvimento

Use o padrão:

```
feature/nome-da-feature
```

Exemplos:

```bash
git checkout -b feature/linkedlist
git checkout -b feature/circularlist
git checkout -b feature/queue
```

---

## 2.3 Trabalhando na sua branch

Faça suas alterações, escreva código, teste localmente.

Use:

```bash
git add .
git commit -m "feat: descrição clara do que foi implementado"
```

Padrões válidos de commit:

- `feat:` nova funcionalidade  
- `fix:` correção de bug  
- `docs:` atualização de documentação  
- `test:` adição/melhoria de testes  
- `refactor:` melhoria interna de código  
- `style:` mudanças que não alteram lógica  

---

## 2.4 Enviando sua branch para o GitHub

Na primeira vez:

```bash
git push --set-upstream origin feature/nome-da-feature
```

Depois:

```bash
git push
```

---

# 🔀 3. Pull Requests (PR)

Após o push, vá ao GitHub e clique em:

> **Compare & Pull Request**

### 3.1 Título padrão
Use:

```
feat: implementa <nome da funcionalidade>
```

Exemplo:

```
feat: implementa lista circular para vitrine de promoções
```

### 3.2 Descrição
Explique o que fez, arquivos alterados e como testar.

---

## 3.3 Revisão obrigatória

### O PR só pode ser feito merge quando:
- 👨‍💻 **Tech Lead (Rafael)** aprovar  
- 🧪 **QA (Ailton)** validar comportamento (se a feature exigir teste)

Nenhum PR deve ser mesclado pelo próprio autor.

---

# 🧪 4. Testes (QA)

O QA valida:

- Casos de erro (edge cases)
- Comportamento esperado das estruturas
- Execução das simulações
- Consistência no README e documentação

Arquivo principal:

```
test/main.test.js
```

---

# 🔧 5. Estrutura do Repositório

```
Estruturas-Squad-Gamma/
│
├── LinkedList/
├── CircularList/
├── Stack/
├── Queue/
├── ArrayComparison/
├── test/
└── README.md
```

Cada módulo possui:
- Classe(s)
- Simulação
- Testes (quando aplicável)

---

# 📝 6. Boas Práticas de Código

- Nomear classes em PascalCase  
- Nomear métodos em camelCase  
- Evitar duplicação de lógica  
- Testar antes de enviar PR  
- Manter a formatação consistente  
- Código limpo e comentado apenas quando necessário  

---

# 🚫 7. O que NÃO deve ser feito

- ❌ Fazer push direto na `main`  
- ❌ Realizar merge sem revisão  
- ❌ Subir arquivos desnecessários  
- ❌ Ignorar testes  
- ❌ Criar branches fora do padrão  

---

# 🎯 8. Missão da Squad

Construir estruturas de dados robustas, testadas e bem documentadas, simulando desafios reais de um sistema de e-commerce moderno.

Se tiver dúvidas, chame o Tech Lead no GitHub ou no grupo da squad.  
Boas contribuições! 🚀🛒  
