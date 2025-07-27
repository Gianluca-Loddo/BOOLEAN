// Vogliamo stampare i numeri da 1 a 100, uno per riga
for (let i = 1; i <= 100; i++) {

  // Controlliamo se il numero è multiplo sia di 3 che di 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

  // Se non è multiplo di entrambi, controlliamo se è multiplo di 3
  } else if (i % 3 === 0) {
    console.log("Fizz");

  // Se non è multiplo di 3, controlliamo se è multiplo di 5
  } else if (i % 5 === 0) {
    console.log("Buzz");

  // Se non è multiplo di 3 né di 5, stampiamo il numero stesso
  } else {
    console.log(i);
  }
}


/*
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " è multiplo di 3 e di 5");
  } else if (i % 3 === 0) {
    console.log(i + " è multiplo di 3");
  } else if (i % 5 === 0) {
    console.log(i + " è multiplo di 5");
  }
}

oppure


// Ciclo che va da 1 a 100
for (let i = 1; i <= 100; i++) {

  // Se il numero è multiplo sia di 3 che di 5 (quindi di 15), stampo "FizzBuzz"
  if (i % 15 === 0) {
    console.log("FizzBuzz");

  // Se il numero è solo multiplo di 3, stampo "Fizz"
  } else if (i % 3 === 0) {
    console.log("Fizz");

  // Se il numero è solo multiplo di 5, stampo "Buzz"
  } else if (i % 5 === 0) {
    console.log("Buzz");

  // Se il numero non è multiplo né di 3 né di 5, stampo il numero stesso
  } else {
    console.log(i);
  }
}




*/