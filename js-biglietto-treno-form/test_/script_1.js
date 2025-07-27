
// 1. Chiedere km da percorrere e età con prompt
const km = parseFloat(prompt("Quanti km vuoi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));

// 2. Prezzo base del biglietto
const prezzoKm = 0.21;
let prezzoFinale = km * prezzoKm;

// 3. Calcolo sconti
if (eta < 18) {
  // sconto 20%
  prezzoFinale = prezzoFinale * 0.8;
} else if (eta > 65) {
  // sconto 40%
  prezzoFinale = prezzoFinale * 0.6;
}

// 4. Arrotondare a 2 decimali
prezzoFinale = prezzoFinale.toFixed(2);

// 5. Output in console
console.log("Prezzo finale del biglietto: " + prezzoFinale + "€");
