/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.


 
// 1. DICHIARAZIONE Funzione che restituisce un saluto in base all'orario corrente

function greetByTime(name) {
  const now = new Date();           
  const hour = now.getHours();      

  if (hour < 13) {
    return `Buongiorno ${name}.`;
  } else if (hour < 17) {
    return `Buon pomeriggio ${name}.`;
  } else {
    return `Buonasera ${name}.`;
  }
}

console.log(greetByTime("Mario"));


/*

✅ const now = new Date();
new → operatore di JavaScript per creare una nuova istanza di un oggetto.
Date() → oggetto integrato (built-in) di JavaScript che serve per lavorare con data e ora.
Quindi: new Date() restituisce la data e ora attuali del sistema.
La variabile now conterrà qualcosa tipo: Mon Jul 21 2025 17:43:00 GMT+0200 (CEST)

✅ const hour = now.getHours();
getHours() → metodo integrato dell’oggetto Date in JavaScript.
Restituisce l’ora attuale, in formato numerico (0-23):
Es: ore 9: → 9
ore 18: → 18

🔹 Cosa significa "creare una nuova istanza di un oggetto" in JavaScript?
Quando diciamo:
const now = new Date();
stiamo creando una nuova istanza dell’oggetto Date.

📦 Cos’è un’istanza?
Un’istanza è una copia concreta di un oggetto definito da una "classe" o da un "costruttore".
In questo caso, Date è un costruttore incorporato (built-in) di JavaScript 
che serve per generare oggetti che rappresentano data e ora.

🔨 E il comando new?
new è un operatore che crea un nuovo oggetto basato su un costruttore (come Date, Array, Object, ecc.).
Quando si usa new, JavaScript costruisce un nuovo oggetto indipendente, 
con tutte le proprietà e i metodi definiti nel costruttore.

Date è un "modello" di oggetto che sa gestire data e ora.

new Date() crea una nuova copia reale (una istanza) di quell’oggetto.

Quella copia ha dentro tutti i metodi (come .getHours(), .getDay(), .toLocaleString(), ecc.).








*/