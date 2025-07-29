
// SNACK 2
const squadre = [
  { nome: "Juventus", punti: 0, falli: 0 },
  { nome: "Inter", punti: 0, falli: 0 },
  { nome: "Milan", punti: 0, falli: 0 },
  { nome: "Roma", punti: 0, falli: 0 }
];

// Funzione per numero random da 1 a 100
const getRandom = () => Math.floor(Math.random() * 100) + 1;

// Popoliamo punti e falli con numeri random
for (let squadra of squadre) {
  squadra.punti = getRandom();
  squadra.falli = getRandom();
}

// Nuovo array con solo nome e falli subiti
const risultati = squadre.map(({ nome, falli }) => {
  return { nome, falli };
});

console.log("Squadre con i falli subiti:");
console.log(risultati);
