const numOne = 8; // NON MODIFICARE QUESTA RIGA
const numTwo = 16; // NON MODIFICARE QUESTA RIGA
const numThree = 32; // NON MODIFICARE QUESTA RIGA

// Sostituisci NaN di seguito utilizzando
// gli operatori numerici di Javascript

// 1. Imposta questa variabile come somma di numOne e numTwo
const numOnePlusNumTwo = numOne + numTwo;
console.log(numOnePlusNumTwo); // Output: 24

// 2. Imposta questa variabile come prodotto di numThree e numTwo
const numThreeTimesNumTwo = numThree * numTwo;
console.log(numThreeTimesNumTwo); // Output: 512

// 3. Imposta questa variabile come divisione di numThree per numOne
const numThreeDividedByNumOne = numThree / numOne;
console.log(numThreeDividedByNumOne); // Output: 4

// 4. Imposta questa variabile come differenza tra numThree e numOne
const numThreeMinusNumOne = numThree - numOne;
console.log(numThreeMinusNumOne); // Output: 24

// 5. Imposta questa variabile come somma di numOne, numTwo e numThree
const sum = numOne + numTwo + numThree;
console.log(sum); // Output: 56

// 6. Imposta questa variabile come somma di numOne, numTwo, numThree diviso numOne
const numBytes = sum / numOne;
console.log(numBytes); // Output: 7

// 6. bis oppure si potrebbe fare anche così
const numBytesBis = (numOne + numTwo + numThree) / numOne;
console.log(numBytesBis); // Output: 7

// In JavaScript, non è consentito dichiarare due volte una variabile con lo stesso nome nello stesso ambito quando si usa let o const.
// per questo motivo, non si può dichiarare una variabile con lo stesso nome di una già esistente ed è stata creata una nuova variabile numBytesBis