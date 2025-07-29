// SNACK 1
const biciclette = [
  { nome: "Bianchi Oltre XR4", peso: 6.8 },
  { nome: "Trek Emonda", peso: 6.5 },
  { nome: "Cannondale SuperSix", peso: 6.9 },
  { nome: "Specialized Tarmac", peso: 6.4 }
];

// Troviamo la bici con il peso minore
let biciLeggera = biciclette[0];

for (let bici of biciclette) {
  if (bici.peso < biciLeggera.peso) {
    biciLeggera = bici;
  }
}

console.log("La bici più leggera è:");
console.log(`${biciLeggera.nome} con peso di ${biciLeggera.peso} kg`);