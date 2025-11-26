const CircularList = require("./CircularList");

// Simulação da vitrine de promoções (lista circular)
console.log("--- SIMULAÇÃO VITRINE DE PROMOÇÕES (LISTA CIRCULAR) ---");

const promotions = new CircularList();

promotions.add({ id: 1, title: "Promoção Mouse Gamer",      discount: 15 });
promotions.add({ id: 2, title: "Promoção Teclado Mecânico", discount: 20 });
promotions.add({ id: 3, title: "Promoção Headset USB",      discount: 10 });

// Mostra um ciclo simples no console
console.log("\nExibindo 6 passos da vitrine (next):\n");

for (let i = 1; i <= 6; i++) {
  const promo = promotions.next();
  if (promo) {
    console.log(
      `Passo ${i}: ${promo.title} — ${promo.discount}% OFF (id: ${promo.id})`
    );
  }
}

console.log("\nExibindo ciclo de promoções (printCycle):\n");
promotions.printCycle(5);
