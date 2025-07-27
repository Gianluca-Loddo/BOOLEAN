'use strict';

// 1. Chiediamo i dati all'utente
const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));

// 2. Verifica validità input
if (isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
  console.log("Inserisci valori numerici validi per chilometri ed età");
} else {
  
    // 3. Prezzo base
  const prezzoKm = 0.21;
  const prezzoPieno = km * prezzoKm;

  // 4. Sconto
  let sconto = 0;

  if (eta < 18) {
    sconto = 20;
  } else if (eta > 65) {
    sconto = 40;
  }

  // 5. Calcolo prezzo finale
  const prezzoFinale = prezzoPieno * (1 - sconto / 100);
  const arrotondato = prezzoFinale.toFixed(2);

  // 6. Output finale in console
  console.log(`Distanza: ${km} km`);
  console.log(`Età passeggero: ${eta} anni`);
  console.log(`Prezzo pieno: €${prezzoPieno.toFixed(2)}`);
  
  if (sconto > 0) {
    console.log(`Sconto applicato: ${sconto}%`);
  } else {
    console.log("Nessuno sconto applicato.");
  }

  console.log(`Prezzo finale del biglietto: €${arrotondato}`);
}
