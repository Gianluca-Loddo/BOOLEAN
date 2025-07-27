/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */


// Dato di input
const word = 'javascript';

// 1. FUNZIONE CLASSICA

// DICHIARAZIONE Funzione che conta le vocali in una stringa
function countVowels(str) {
  // Definiamo l'elenco delle vocali che vogliamo considerare
  const vocali = ['a', 'e', 'i', 'o', 'u'];

  // Variabile per tenere il conteggio
  let count = 0;

  // Scorro ogni carattere della stringa
  for (let i = 0; i < str.length; i++) {
    const lettera = str[i];

    // Se la lettera è inclusa nella lista delle vocali, incremento il contatore
    if (vocali.includes(lettera)) // se la lettera è una vocale, entra qui (esegue quanto compreso tra le parentesi graffe)
                                    {
      count++;
    }
  }

  // Ritorno il totale delle vocali
  return count;
}

// Invocazione e stampa
console.log(countVowels(word)); // Output atteso: 3


/* USO DI .includes() 
.includes() è un metodo nativo di JavaScript che permette di verificare se un array (o stringa) contiene un determinato elemento.
INCLUDES RESTITUISCE SOLO UN VALORE BOOLEANO (TRUE O FALSE) A SECONDA CHE L'ELEMENTO SIA PRESENTE O MENO NELL'ARRAY (O NELLA STRINGA).

Esempio:
const array = [1, 2, 3];
console.log(array.includes(2)); // Output: true
console.log(array.includes(4)); // Output: false

Nel nostro caso, lo utilizziamo per controllare se una lettera è presente nell'elenco delle vocali.
*/



// 1.1 FUNZIONE CLASSICA (SENZA .includes())
/*
function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();

    // Controllo manuale delle vocali senza includes
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      count++;
    }
  }

  return count;
}
*/




// 2. FUNZIONE ARROW


// Dato di input 
// const word = 'javascript';

// DICHIARAZIONE Funzione che conta le vocali in una stringa
const countVowels = (str) => {
  const vocali = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const lettera = str[i].toLowerCase();

    if (vocali.includes(lettera)) {
      count++;
    }
  }

  return count;
};

// Invocazione e stampa
console.log(countVowels(word)); // Output atteso: 3 






