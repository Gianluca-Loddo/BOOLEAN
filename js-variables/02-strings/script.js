// 1. Dichiarazione di variabili
// Crea una variabile chiamata name e assegnale il tuo nome.
// Stampa il valore di nome nella console.

const name = "Gianluca";
console.log(name); // Output: "Gianluca"

// VisualStudioCode mi segnala un errore di linting perché non è stato utilizzato il nome della variabile in camelCase.
// Dovrei rinominare la variabile in modo che segua le convenzioni di denominazione.

const userName = "Gianluca";
console.log(userName); // Output: "Gianluca"

// 2. Tipi primitivi
// Crea tre variabili chiamate number, text e bool e assegna rispettivamente
// un numero, una stringa e un valore booleano.
// Stampa tutti i valori nella console.

const number = 42; // Un numero
const text = "Hello, World!"; // Una stringa
const bool = true; // Un valore booleano
console.log(number, text, bool);


// NOTA: valori booleani possono essere true o false.
// Esempio di un valore booleano che rappresenta se una persona è maggiorenne o meno:
const age = 20;
const isAdult = age >= 18; // true

console.log(isAdult); // Output: true


// | Descrizione                      | Variabile booleana                     |
// | -------------------------------- | -------------------------------------- |
// | L’utente ha effettuato il login? | `const isLoggedIn = true;`             |
// | Il prodotto è disponibile?       | `const inStock = false;`               |
// | Il numero è pari?                | `const isEven = (num % 2 === 0);`      |
// | La password è corretta?          | `const isValid = password === "1234";` |



// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente 
// in console la stringa con il nome completo
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const firstName = 'Jane'; // NON MODIFICARE QUESTA RIGA
const lastName = 'Smith'; // NON MODIFICARE QUESTA RIGA

// Per concatenare le stringhe, si può utilizzare il template literal
// const fullName = `${firstName} ${lastName}`; // Utilizza i templateliterals
// oppure si potrebbe utilizzare l'operatore di concatenazione +
// const fullName = firstName + ' ' + lastName; // Utilizza l'// operatore di concatenazione

const fullName = `${firstName} ${lastName}`; // Concatenazione delle stringhe
console.log(fullName); // Output: "Jane Smith"

//NOTA: Le backtick (`) permettono di creare stringhe dinamiche.
// ${...} permette di inserire variabili o espressioni direttamente nella stringa.


// per poter utilizzare l'operatore di concatenazione verrà dichiarata una nuova variabile fullName2 in quanto fullName è già stato definito
// In JavaScript, non è consentito dichiarare due volte una variabile con lo stesso nome nello stesso ambito quando si usa let o const.
const fullName2 = firstName + ' ' + lastName; // Concatenazione delle stringhe
console.log(fullName2); // Output: "Jane Smith"

// 4. Imposta questa variabile utilizzando una proprietà
// sulla variabile alphabet per ottenere la sua lunghezza
const numberOfLettersInAlphabet = alphabet.length; // Lunghezza della stringa alphabet
console.log(numberOfLettersInAlphabet); // Output: 26