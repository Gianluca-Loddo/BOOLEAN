/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

// Dichiara l'array di nomi
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



// Esercizio: Creare una funzione che restituisca le iniziali di un array di nomi
// Utilizzeremo una FUNZIONE TRADIZIONALE per questo scopo
// Iniziamo definendo l'array di nomi
// e poi creeremo una funzione che utilizza il metodo map per estrarre le iniziali



// Array di nomi di partenza
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// DICHIARAZIONE FUNZIONE TRADIZIONALE che prende un array e restituisce un array con le iniziali
function getInitials(array) {
  // Creo un nuovo array usando map per estrarre il primo carattere di ogni nome
  const initials = array.map(function(name) {

/*Qui usiamo il metodo .map() sull’array passato.

map() è un metodo degli array in JavaScript che ti permette di trasformare 
ogni elemento dell’array originale e ottenere un nuovo array.

map() scorre ogni elemento dell’array e applica la funzione scritta tra parentesi.
Ogni elemento viene rappresentato da name (cioè un singolo nome alla volta).

| Ciclo | `name` vale | `name[0]` (cioè la lettera) |
| ----- | ----------- | --------------------------- |
| 1     | `"Anna"`    | `"A"`                       |
| 2     | `"Luca"`    | `"L"`                       |
| 3     | `"Marco"`   | `"M"`                       |

name è una variabile che rappresenta il nome corrente durante l'iterazione.
name[0] è la prima lettera di quel nome.
name è un parametro della funzione anonima passata a map().
name è un nome qualsiasi, ma comunemente si usa per rappresentare un singolo nome. (puoi chiamarlo anche `n`, `nome`, o come preferisci).

const pippo = ["Anna", "Luca", "Marco"];

const iniziali = pippo.map(function(nome) {
  return nome[0];
});

console.log(iniziali); // ["A", "L", "M"]

MAP funziona così: prende ogni elemento dell'array e lo trasforma in qualcosa di nuovo.
MAP FUNZIONA SOLO CON GLI ARRAY.

*/


    return name[0]; // Prendo solo la prima lettera
  });

  // Ritorno l'array con le iniziali
  return initials;
}



// Invoco la funzione e salvo il risultato
const resultTradizionale = getInitials(names);

// Stampo in console l'array risultante
console.log(resultTradizionale); // ["A", "L", "M", "A", "G", "A"]



/*
| Metodo      | Cosa fa                                                                            |
| ----------- | ---------------------------------------------------------------------------------- |
| `map()`     | Crea un **nuovo array** trasformando ogni elemento                                 |
| `forEach()` | Esegue qualcosa per ogni elemento, ma **non restituisce nulla**                    |
| `filter()`  | Restituisce un nuovo array solo con gli elementi **che soddisfano una condizione** |
*/





// VERSIONE CON ARROW FUNCTION


// DICHIARO Arrow function equivalente, scritta in modo compatto
const getInitialsArrow = (array) => array.map(name => name[0]);

// Invoco la funzione arrow
const resultArrow = getInitialsArrow(names);

// Stampo in console il risultato
console.log(resultArrow); // ["A", "L", "M", "A", "G", "A"]





// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]