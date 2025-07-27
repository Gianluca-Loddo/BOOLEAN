/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];




// 1. FUNZIONE TRADIZIONALE



// DICHIARAZIONE FUNZIONE

function filterByFirstLetter(array, letter) {
  // Creo un array vuoto per salvare le parole che iniziano con la lettera
  const result = [];

  // Scorro ogni parola dell'array
  for (let i = 0; i < array.length; i++) {
    
    // WORD è DI TIPO CONST IN QUANTO QUESTA RIGA CREA UNA NUOVA VARIABILE WORD AD OGNI CICLO DEL FOR

    const word = array[i]; 
    
    // Prendo la parola corrente
    // Estrai la parola corrente alla posizione i dell'array.
    // Es. array[0] = "Anna" → word = "Anna"
    // word[0] accede alla prima lettera della parola corrente
    

    // Controllo se la prima lettera della parola è uguale alla lettera passata
    if (word[0] === letter) {
      result.push(word); // Aggiungo la parola all'array risultato
    }
  }

  // Ritorno l'array filtrato
  return result;
}

/* simulazione del ciclo for con i dati di esempio

| 🌀 Ciclo | `i` | `array[i]` (word) | `word[0]` | `letter` | Condizione `word[0] === letter` | Azione               | Stato di `result`                 |
| -------- | --- | ----------------- | --------- | -------- | ------------------------------- | -------------------- | --------------------------------- |
| 1        | 0   | `"Anna"`          | `"A"`     | `"A"`    | ✅ Vero                          | `push("Anna")`       | `["Anna"]`                        |
| 2        | 1   | `"Luca"`          | `"L"`     | `"A"`    | ❌ Falso                         | Nessuna azione       | `["Anna"]`                        |
| 3        | 2   | `"Marco"`         | `"M"`     | `"A"`    | ❌ Falso                         | Nessuna azione       | `["Anna"]`                        |
| 4        | 3   | `"Adele"`         | `"A"`     | `"A"`    | ✅ Vero                          | `push("Adele")`      | `["Anna", "Adele"]`               |
| 5        | 4   | `"Laura"`         | `"L"`     | `"A"`    | ❌ Falso                         | Nessuna azione       | `["Anna", "Adele"]`               |
| 6        | 5   | `"Alessandra"`    | `"A"`     | `"A"`    | ✅ Vero                          | `push("Alessandra")` | `["Anna", "Adele", "Alessandra"]` |

*/



// INVOCAZIONE FUNZIONE E STAMPA
console.log(filterByFirstLetter(names, "A")); // ["Anna", "Adele", "Alessandra"]



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]





// 2. FUNZIONE ARROW

// DICHIARAZIONE FUNZIONE ARROW
const filterByFirstLetterArrow = (array, letter) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === letter) {
      result.push(array[i]);
    }
  }

  return result;
};

// INVOCAZIONE FUNZIONE E STAMPA
console.log(filterByFirstLetterArrow(names, "A")); // ["Anna", "Adele", "Alessandra"]





// 2.1 FUNZIONE ARROW (FILTER)


// UTILIZZO DELLA FUNZIONE FILTER per filtrare le parole che iniziano con la lettera specificata.

// La funzione filter è un metodo degli array che crea un nuovo array con tutti gli elementi che
// soddisfano la condizione specificata in una funzione di callback
// In questo caso, la funzione di callback è una funzione arrow che verifica se la prima lettera
// della parola è uguale alla lettera passata come argomento
// La funzione arrow accetta due parametri: l'array di parole e la lettera
// La funzione filter restituisce un nuovo array contenente solo le parole che soddisfano la condizione specificata
// La condizione è che la prima lettera della parola sia uguale alla lettera passata come argomento

// DICHIARAZIONE FUNZIONE ARROW CON FILTER
const filterByFirstLetterArrow = (array, letter) => {
  return array.filter(word => word[0] === letter);
}

// INVOCAZIONE FUNZIONE E STAMPA
console.log(filterByFirstLetterArrow(names, "A")); // ["Anna", "Adele", "Alessandra"]
