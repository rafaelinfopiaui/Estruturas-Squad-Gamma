/**
 * Task 5 – Comparação de Estruturas
 *
 * Problema:
 *   O catálogo de produtos/categorias é estático, muda pouco,
 *   mas é MUITO consultado.
 *
 * Objetivo:
 *   Justificar, com exemplo prático, por que um Array (Vetor)
 *   é melhor que uma Lista Ligada (LinkedList) para esse cenário,
 *   focando na velocidade de acesso por índice.
 */

// Catálogo fixo de categorias (exemplo)
const categoriesArray = [
  "Informática",
  "Eletrodomésticos",
  "Mobília",
  "Games",
  "Esporte",
  "Livros",
  "Roupas",
  "Beleza"
];

// Lista ligada simplificada só para comparação
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SimpleLinkedList {
  constructor(items) {
    this.head = null;
    items.forEach((item) => this.add(item));
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  // Acessar por índice: O(n)
  get(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) return current.data;
      current = current.next;
      count++;
    }

    return null;
  }
}

// Criando uma LinkedList com as mesmas categorias
const categoriesLinkedList = new SimpleLinkedList(categoriesArray);

// Índice de exemplo a ser acessado (como se o sistema quisesse buscar "Livros")
const indexToAccess = 5;

console.log("=== Comparação de Acesso: Array vs LinkedList ===\n");
console.log(`Acessando o índice ${indexToAccess} (6ª categoria)...\n`);

// Acesso direto em Array (O(1))
console.time("Tempo de acesso em Array");
const fromArray = categoriesArray[indexToAccess];
console.timeEnd("Tempo de acesso em Array");

// Acesso percorrendo a LinkedList (O(n))
console.time("Tempo de acesso em LinkedList");
const fromList = categoriesLinkedList.get(indexToAccess);
console.timeEnd("Tempo de acesso em LinkedList");

console.log("\nCategoria obtida via Array:      ", fromArray);
console.log("Categoria obtida via LinkedList: ", fromList);

console.log(`
========================================================
CONCLUSÃO (Task 5 – Comparação de Estruturas)

- O Array permite acesso direto por índice:
    categoriasArray[index]  -> Complexidade O(1)

  Isso significa que, mesmo se houver 10, 100 ou 1.000 categorias,
  o tempo de acesso permanece constante.

- Já na Lista Ligada, para acessar o índice N, é preciso
  percorrer nó a nó até chegar lá:
    linkedList.get(index)  -> Complexidade O(n)

  Ou seja, quanto maior a lista, mais lenta fica a leitura.

- Como o catálogo de categorias é ESTÁTICO (raramente muda)
  e é ALTAMENTE CONSULTADO (muitas leituras, poucas escritas),
  a prioridade é performance de leitura.

👉 Por isso, para armazenar o catálogo fixo de categorias do site,
   um ARRAY (Vetor) é a estrutura ideal.
========================================================
`);
