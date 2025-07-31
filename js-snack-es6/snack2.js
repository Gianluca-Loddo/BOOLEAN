
// SNACK 2
const squadre = [
  { nome: "Juventus", punti: 0, falli: 0 },
  { nome: "Inter", punti: 0, falli: 0 },
  { nome: "Milan", punti: 0, falli: 0 },
  { nome: "Roma", punti: 0, falli: 0 }
];

// Funzione per numero random da 1 a 100
const getRandom = () => Math.floor(Math.random() * 100) + 1;

/*
👉 Qui definiamo una funzione chiamata getRandom:
Serve per generare un numero casuale tra 1 e 100.
Math.random() → dà un numero da 0 a 0.999...
* 100 → lo porta da 0 a 99.999
Math.floor(...) → lo arrotonda per difetto (es. 47.7 → 47)
+ 1 → così il minimo è 1 e il massimo è 100
*/



// Popoliamo punti e falli con numeri random
for (let squadra of squadre) {
  squadra.punti = getRandom();
  squadra.falli = getRandom();
}

/*
👉 Cicliamo ogni squadra dell’array:
Per ogni squadra generiamo un numero casuale tra 1 e 100 e lo assegniamo ai campi:
punti
falli
Così abbiamo simulato dei dati realistici (come se fossero stati giocati dei campionati).
*/


// Nuovo array con solo nome e falli subiti
const risultati = squadre.map(({ nome, falli }) => {
  return { nome, falli };
});

/*👉 Qui usiamo il metodo map:

Il metodo map ci permette di creare un nuovo array trasformando gli elementi di un array esistente.
In questo caso, stiamo estraendo solo il nome e i falli di ogni squadra.

.map() è un metodo degli array.

Serve per:
trasformare ogni elemento di un array
e restituire un nuovo array con gli elementi trasformati.

"Prendi un array, fai qualcosa a ogni elemento, e costruisci un nuovo array con il risultato di quel “qualcosa”."



La parte ({ nome, falli }) è DESTRUTTURAZIONE:

Significa che stiamo prendendo solo le proprietà nome e falli da ogni oggetto squadra.
Restituiamo un nuovo oggetto con solo quelle proprietà.

Invece di scrivere:

const risultati = squadre.map((squadra) => {
  return { nome: squadra.nome, falli: squadra.falli };
});

Possiamo usare la destrutturazione per semplificare:

const risultati = squadre.map(({ nome, falli }) => {
  return { nome, falli };
});


📍 return { nome, falli };

Stiamo creando un nuovo oggetto con solo nome e falli.

Quindi, risultati conterrà un array di oggetti con solo nome e falli subiti.
Ecco come sarà il nuovo array risultati:

[
  { nome: "Juventus", falli: 23 }, questo è un oggetto con nome e falli
  { nome: "Inter", falli: 12 },
  { nome: "Milan", falli: 34 },
  { nome: "Roma", falli: 45 }
]


*/



console.log("Squadre con i falli subiti:");
console.log(risultati);


/* CODICE SENZA METODO MAP 


CON DESTRUTTURAZIONE

const risultati = [];
for (let squadra of squadre) {
  const { nome, falli } = squadra; // DESTRUTTURAZIONE
  risultati.push({ nome, falli });
}     

console.log("Squadre con i falli subiti:");
console.log(risultati);     


SENZA DESTRUTTURAZIONE  

const risultati = [];
for (let squadra of squadre) {
  risultati.push({ nome: squadra.nome, falli: squadra.falli });
}

console.log("Squadre con i falli subiti:");
console.log(risultati); 


OPPURE

const risultati = [];
for (let i = 0; i < squadre.length; i++) {
  const squadra = squadre[i];
  risultati.push({
    nome: squadra.nome,
    falli: squadra.falli
  });
}

console.log("Squadre con i falli subiti:");
console.log(risultati);

*/